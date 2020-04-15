import {StylesConfig, Theme, Styles} from "react-select";

const DANGER_COLOR = "#FF8880";
const TEXT_COLOR = '#000000';
const SELECT_FOCUS_COLOR = "#97E79E";
const SELECT_HOVER_COLOR = "#97E79E";
const OPTION_HOVER_COLOR = "#D7FCCF";

export const selectStyles = {
  indicatorSeparator: () => ({
    display: 'block',
    backgroundColor: '#A7A9AC',
    height: '100%',
    width: '1px',
  }),
  dropdownIndicator: (provided: React.CSSProperties) => ({
    ...provided,
    color: SELECT_FOCUS_COLOR,
  }),
  menu: (provided: React.CSSProperties) => ({
    ...provided,
    zIndex: 100,
    fontWeight: 100,
    marginTop: 0
  }),
  option: (provided: React.CSSProperties) => ({
    ...provided,
    color: TEXT_COLOR,
  }),
  control: (provided: React.CSSProperties) => {
    return {
      ...provided,
      fontSize: '1rem',
      borderColor: '#A7A9AC',
      borderWidth: '1px',
      borderRadius: '4px',
      borderStyle: 'solid',
      lineHeight: '1.2rem',
      fontFamily: 'Montserrat',
      fontWeight: 300,
      boxShadow: 'none'
    };
  },
  input: (provided: React.CSSProperties) => ({
    ...provided,
    margin: 0,
    paddingBottom: 0,
    paddingTop: 0,
  }),
  valueContainer: (provided: React.CSSProperties, state: any) => {
    return {
      ...provided,
      padding: '1rem'
    }
  }
};

export const multiSelectStyles = {
  ...selectStyles,
  valueContainer: (provided: React.CSSProperties, state: any) => {
    return {
      ...provided,
      padding: state.hasValue ? '0.7rem' : '1rem'
    }
  }
};

export const invalidSelectStyles = (styles: StylesConfig) => ({
  ...selectStyles,
  dropdownIndicator: (provided: React.CSSProperties) => ({
    ...provided,
    color: DANGER_COLOR
  }),
  control: (provided: React.CSSProperties, state: any) => {
    const properties = styles.control ?
                       styles.control(provided, state) : provided;
    return {
      ...properties,
      borderColor: DANGER_COLOR
    };
  },
});

export const lightSelectStyles = () => ({
  ...selectStyles,
  dropdownIndicator: (provided: React.CSSProperties) => ({
    ...provided,
    color: 'black',
    '&:hover': {
      color: 'black',
    },
  }),
  clearIndicator: (provided: React.CSSProperties) => ({
    ...provided,
    color: 'black',
    '&:hover': {
      color: 'black',
    },
  }),
  option: (provided: React.CSSProperties, state: any) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? 'black' : 'transperent',
    '&:hover': {
      color: 'white',
      backgroundColor: 'black'
    },
  }),
  singleValue: (provided: React.CSSProperties) => ({
    ...provided,
    color: 'black'
  }),
  multiValueLabel: (provided: React.CSSProperties) => ({
    ...provided,
    backgroundColor: 'black',
    color: 'white',
  }),
  multiValueRemove: (provided: React.CSSProperties) => ({
    ...provided,
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
      color: 'white',
    },
  }),
});

export const darkSelectStyles = () => ({
  ...selectStyles,
  dropdownIndicator: (provided: React.CSSProperties) => ({
    ...provided,
    color: 'white',
    '&:hover': {
      color: 'white',
    },
  }),
  clearIndicator: (provided: React.CSSProperties) => ({
    ...provided,
    color: 'white',
    '&:hover': {
      color: 'white',
    },
  }),
  option: (provided: React.CSSProperties, state: any) => ({
    ...provided,
    color: state.isSelected ? 'black' : 'white',
    backgroundColor: state.isSelected ? 'white' : 'transperent',
    '&:hover': {
      color: 'black',
      backgroundColor: 'white'
    },
  }),
  singleValue: (provided: React.CSSProperties) => ({
    ...provided,
    color: 'white'
  }),
  multiValueRemove: (provided: React.CSSProperties) => ({
    ...provided,
    cursor: 'pointer',
  }),
});

export const selectColors = {
  primary: SELECT_FOCUS_COLOR,
  primary25: OPTION_HOVER_COLOR,
  primary50: OPTION_HOVER_COLOR,
  neutral30: SELECT_HOVER_COLOR
};

export const selectTheme = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    ...selectColors
  }
});

export const invalidSelectTheme = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    ...selectColors,
    primary: DANGER_COLOR,
    neutral30: DANGER_COLOR
  }
});

export const accessLightSelectTheme = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    ...selectColors,
    primary: 'black', // border focus
    primary50: 'black', // click
    primary25: 'black', // Hover
    neutral0: 'white', // backgroundColor
    neutral20: 'black', // border color
    neutral30: 'black', // border hover
    neutral50: 'black', // placeholderColor
    dangerLight: 'black'
  }
});

export const accessDarkSelectTheme = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    ...selectColors,
    primary: 'white', // border focus
    primary50: 'white', // click
    primary25: 'white', // Hover
    neutral0: 'black', // backgroundColor
    dangerLight: 'white',
    danger: 'black',
    neutral10: 'white',
    neutral20: 'white', // border color
    neutral30: 'white', // border hover
    neutral50: 'white', // placeholderColor
  }
});


// primary
// primary75
// primary50
// primary25
// danger
// dangerLight
// neutral0
// neutral5
// neutral10
// neutral20
// neutral30
// neutral40
// neutral50
// neutral60
// neutral70
// neutral80
// neutral90
