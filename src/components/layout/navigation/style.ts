export const navigationStyle = {
  wrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  MDMenuBox: {
    flexGrow: 1,
    display: {
      xs: 'none',
      md: 'flex',
      justifyContent: 'center',
      fontWeight: 'bold'
    }
  },
  xsLogoBox: {
    mr: 2,
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1
  },
  menuStyle: {
    display: { xs: 'block', md: 'none' }
  },
  iconBox: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
  logoLink: {
    mr: 2,
    display: { xs: 'none', md: 'flex' }
  },
  appBar: {
    padding: '1.5rem 1rem',
    width: '100%'
  },
  dropDownIcon: {
    float: 'right',
    top: '-2px',
    right: '4px',
    position: 'relative',
    width: '1.5em',
    height: '1.5em'
  },

  link: {
    padding: '.5em',
    textDecoration: 'none',
    fontSize: '1.25rem'
  }
}
