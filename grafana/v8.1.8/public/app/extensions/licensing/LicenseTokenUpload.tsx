import React, { FormEvent } from 'react';
import { css } from '@emotion/css';
import { Button, FileUpload, stylesFactory } from '@grafana/ui';

interface Props {
  isUploading: boolean;
  title: string;
  onFileUpload: (event: FormEvent<HTMLInputElement>) => void;
}

export const LicenseTokenUpload = ({ isUploading, title, onFileUpload }: Props) => {
  const styles = getStyles();

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {isUploading ? (
        <Button disabled={true}>Uploading…</Button>
      ) : (
        <FileUpload onFileUpload={onFileUpload} accept=".jwt">
          Upload license token file
        </FileUpload>
      )}
    </>
  );
};

const getStyles = stylesFactory(() => {
  return {
    title: css`
      margin-top: 30px;
      margin-bottom: 20px;
    `,
  };
});
