import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import { capitalize } from '@material-ui/core/utils';
import { makeStyles } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => {
  const createStyle = color => {
    return {
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main
    };
  };

  return {
    root: {
      fontWeight: theme.typography.fontWeightMedium
    },
    colorPrimary: createStyle('primary'),
    colorSecondary: createStyle('secondary'),
    colorInfo: createStyle('info'),
    colorSuccess: createStyle('success'),
    colorWarning: createStyle('warning'),
    colorError: createStyle('error')
  };
});

// ----------------------------------------------------------------------

const MAvatar = forwardRef(
  ({ size = 40, color = 'default', children, className, ...other }, ref) => {
    const classes = useStyles();

    return (
      <Avatar
        ref={ref}
        className={clsx(
          classes.root,
          {
            [classes[`color${capitalize(color)}`]]: color
          },
          className
        )}
        sx={{ width: size, height: size }}
        {...other}
      >
        {children}
      </Avatar>
    );
  }
);

MAvatar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error'
  ])
};

export default MAvatar;
