/* eslint-disable react/jsx-props-no-spreading */
import React, { ForwardedRef, forwardRef } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';

interface ISubCardProps {
  children: JSX.Element;
  content: boolean;
  contentClass: string;
  contentSX: object;
  darkTitle: boolean;
  secondary: React.ReactNode;
  sx: object;
  title: React.ReactNode;
}

const SubCard = forwardRef(
  (
    {
      children,
      content = true,
      contentClass,
      darkTitle,
      secondary,
      sx = {},
      contentSX = {},
      title,
      ...others
    }: ISubCardProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Card
        ref={ref}
        sx={{
          border: '1px solid',
          borderColor: 'palette.primary.light',
          ':hover': {
            boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)',
          },
          ...sx,
        }}
        {...others}
      >
        {/* card header and action */}
        {!darkTitle && title && (
          <CardHeader
            sx={{ p: 2.5 }}
            title={<Typography variant="h5">{title}</Typography>}
            action={secondary}
          />
        )}
        {darkTitle && title && (
          <CardHeader
            sx={{ p: 2.5 }}
            title={<Typography variant="h4">{title}</Typography>}
            action={secondary}
          />
        )}

        {/* content & header divider */}
        {title && (
          <Divider
            sx={{
              opacity: 1,
              borderColor: 'palette.primary.light',
            }}
          />
        )}

        {/* card content */}
        {content && (
          <CardContent
            sx={{ p: 2.5, ...contentSX }}
            className={contentClass || ''}
          >
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  }
);

export default SubCard;
