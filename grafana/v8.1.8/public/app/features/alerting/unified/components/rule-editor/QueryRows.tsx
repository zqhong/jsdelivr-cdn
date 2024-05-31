import React, { PureComponent } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { DataQuery, DataSourceInstanceSettings, PanelData, RelativeTimeRange } from '@grafana/data';
import { getDataSourceSrv } from '@grafana/runtime';
import { QueryWrapper } from './QueryWrapper';
import { AlertQuery } from 'app/types/unified-alerting-dto';

interface Props {
  // The query configuration
  queries: AlertQuery[];
  data: Record<string, PanelData>;

  // Query editing
  onQueriesChange: (queries: AlertQuery[]) => void;
  onDuplicateQuery: (query: AlertQuery) => void;
  onRunQueries: () => void;
}

interface State {
  dataPerQuery: Record<string, PanelData>;
}

export class QueryRows extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { dataPerQuery: {} };
  }

  onRemoveQuery = (query: DataQuery) => {
    this.props.onQueriesChange(
      this.props.queries.filter((item) => {
        return item.model.refId !== query.refId;
      })
    );
  };

  onChangeTimeRange = (timeRange: RelativeTimeRange, index: number) => {
    const { queries, onQueriesChange } = this.props;
    onQueriesChange(
      queries.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }
        return {
          ...item,
          relativeTimeRange: timeRange,
        };
      })
    );
  };

  onChangeDataSource = (settings: DataSourceInstanceSettings, index: number) => {
    const { queries, onQueriesChange } = this.props;

    onQueriesChange(
      queries.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        const previous = getDataSourceSrv().getInstanceSettings(item.datasourceUid);

        if (previous?.type === settings.uid) {
          return {
            ...item,
            datasourceUid: settings.uid,
          };
        }

        const { refId, hide } = item.model;

        return {
          ...item,
          datasourceUid: settings.uid,
          model: { refId, hide },
        };
      })
    );
  };

  onChangeQuery = (query: DataQuery, index: number) => {
    const { queries, onQueriesChange } = this.props;

    onQueriesChange(
      queries.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }
        return {
          ...item,
          refId: query.refId,
          model: {
            ...item.model,
            ...query,
            datasource: query.datasource!,
          },
        };
      })
    );
  };

  onDragEnd = (result: DropResult) => {
    const { queries, onQueriesChange } = this.props;

    if (!result || !result.destination) {
      return;
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    if (startIndex === endIndex) {
      return;
    }

    const update = Array.from(queries);
    const [removed] = update.splice(startIndex, 1);
    update.splice(endIndex, 0, removed);
    onQueriesChange(update);
  };

  onDuplicateQuery = (query: DataQuery, source: AlertQuery): void => {
    this.props.onDuplicateQuery({
      ...source,
      model: query,
    });
  };

  getDataSourceSettings = (query: AlertQuery): DataSourceInstanceSettings | undefined => {
    return getDataSourceSrv().getInstanceSettings(query.datasourceUid);
  };

  render() {
    const { onDuplicateQuery, onRunQueries, queries } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="alerting-queries" direction="vertical">
          {(provided) => {
            return (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {queries.map((query, index) => {
                  const data = this.props.data ? this.props.data[query.refId] : ({} as PanelData);
                  const dsSettings = this.getDataSourceSettings(query);

                  if (!dsSettings) {
                    return null;
                  }

                  return (
                    <QueryWrapper
                      index={index}
                      key={`${query.refId}-${index}`}
                      dsSettings={dsSettings}
                      data={data}
                      query={query}
                      onChangeQuery={this.onChangeQuery}
                      onRemoveQuery={this.onRemoveQuery}
                      queries={queries}
                      onChangeDataSource={this.onChangeDataSource}
                      onDuplicateQuery={onDuplicateQuery}
                      onRunQueries={onRunQueries}
                      onChangeTimeRange={this.onChangeTimeRange}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    );
  }
}
