import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '~/components/theme/Markdown';
import { LoadingButton } from '@material-ui/lab';
import Scrollbars from '~/components/theme/Scrollbars';
import EmptyContent from '~/components/theme/EmptyContent';
import { DialogAnimate } from '~/components/theme/Animate';
import { alpha, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Container,
  Typography,
  DialogActions
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  dialogActions: {
    padding: theme.spacing(2, 3)
  },
  hero: {
    paddingTop: '56%',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '&:before': {
      top: 0,
      content: "''",
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundColor: alpha(theme.palette.grey[900], 0.72)
    }
  },
  title: {
    top: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    color: 'white',
    position: 'absolute',
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('lg')]: { paddingTop: theme.spacing(10) }
  }
}));

// ----------------------------------------------------------------------

function PreviewHero({ title, cover }) {
  const classes = useStyles();
  return (
    <Box className={classes.hero} sx={{ backgroundImage: `url(${cover})` }}>
      <Container className={classes.title}>
        <Typography variant="h2" component="h1">
          {title}
        </Typography>
      </Container>
    </Box>
  );
}

PreviewPost.propTypes = {
  formik: PropTypes.object.isRequired,
  openPreview: PropTypes.bool,
  onClosePreview: PropTypes.func,
  className: PropTypes.string
};

function PreviewPost({ formik, openPreview, onClosePreview, className }) {
  const classes = useStyles();
  const { values, handleSubmit, isSubmitting, isValid } = formik;
  const title = values.title;
  const description = values.description;
  const content = values.content;
  const cover = values.cover && values.cover.preview;
  const hasContent = title || description || content || cover;
  const hasHero = title || cover;

  return (
    <DialogAnimate
      fullScreen
      open={openPreview}
      onClose={onClosePreview}
      className={clsx(classes.root, className)}
    >
      <DialogActions className={classes.dialogActions}>
        <Box component="h6" sx={{ typography: 'subtitle1', flexGrow: 1 }}>
          Preview Post
        </Box>
        <Button onClick={onClosePreview}>Cancel</Button>
        <LoadingButton
          type="submit"
          variant="contained"
          disabled={!isValid}
          pending={isSubmitting}
          onClick={handleSubmit}
        >
          Post
        </LoadingButton>
      </DialogActions>

      {hasContent ? (
        <Scrollbars>
          {hasHero && <PreviewHero title={title} cover={cover} />}
          <Container>
            <Box sx={{ mt: 5, mb: 10 }}>
              <Box component="p" sx={{ typography: 'h6', mb: 5 }}>
                {description}
              </Box>
              <Markdown source={content} />
            </Box>
          </Container>
        </Scrollbars>
      ) : (
        <EmptyContent title="Empty content" />
      )}
    </DialogAnimate>
  );
}

export default PreviewPost;
