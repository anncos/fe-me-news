export default ({ palette, typography, mixins }) => ({
  subsection: {
    padding: [22, 0],
    ...typography.secondary,
    fontSize: 16,
    borderBottom: `1px solid ${palette.color.grayLighter}`,
    [mixins.media('sm')]: {
      borderBottom: 'none',
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: [8, 10, 8, 10],
    border: 'none',
    borderRadius: 0,
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    fontSize: 16,
    color: palette.text.default,
    width: '100%',
    textAlign: 'left',
    ...typography.secondary,
    [mixins.media('sm')]: {
      marginBottom: 22,
      borderBottom: `1px solid ${palette.color.grayDark}`,
      pointerEvents: 'none',
    },
  },
  titleRight: {
    display: 'flex',
    alignItems: 'center',
  },
  chevron: {
    marginLeft: 10,
  },
  contentPadding: {
    padding: [0, 10],
  },
  desktop: {
    display: 'none',
    [mixins.media('sm')]: {
      display: 'block',
    },
  },
  mobile: {
    [mixins.media('sm')]: {
      display: 'none',
    },
  },
});
