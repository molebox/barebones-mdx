export default 
{
  borders: [
    "1px"
  ],
  borderStyles: [
    "solid",
    "dashed"
  ],
  borderWidths: [
    1,
    4
  ],
  colors: {
    text: "#24292E",
    background: "#FFFFFF",
    primary: "#03cc82",
    secondary: "#34D058",
    muted: "#CCCCCC",
    highlight: "#BBFFCD",
    gray: "#808080",
    accent: "#cee5ff",
    darken: "#F7F7F7"
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace"
  },
  fontSizes: [
    "0.75rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2.125rem",
    "3rem",
    "3.5rem",
    "6rem"
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lettingSpacings: {},
  lineHeights: {
    heading: 1,
    body: 1.5
  },
  radii: [],
  shadows: [
    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
  ],
  sizes: {
    container: 1140
  },
  space: [
    0,
    4,
    8,
    16,
    24,
    32
  ],
  zIndices: [],
  breakpoints: [],
  styles: {
    root: {
      fontSize: 1,
      fontFamily: "body",
      lineHeight: "body"
    },
    p: {
      color: "text",
      lineHeight: "body",
      code: {
        backgroundColor: "darken",
        color: "text",
        padding: 1
      }
    },
    small: {
      fontSize: 0
    },
    a: {
      color: "secondary"
    },
    h1: {
      color: "text",
      fontSize: 7,
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 5,
      a: {
        color: "inherit"
      }
    },
    h2: {
      color: "text",
      fontSize: 6,
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 4,
      a: {
        color: "inherit"
      }
    },
    h3: {
      color: "text",
      fontSize: 5,
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
      a: {
        color: "inherit"
      }
    },
    h4: {
      color: "text",
      fontSize: 4,
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
      a: {
        color: "inherit"
      }
    },
    h5: {
      color: "text",
      fontSize: 3,
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
      a: {
        color: "inherit"
      }
    },
    h6: {
      color: "text",
      fontSize: 2,
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3
    },
    img: {},
    pre: {
      borderColor: "gray",
      borderStyle: 1,
      borderWidth: 0,
      backgroundColor: "darken",
      color: "text",
      lineHeight: "body",
      overflow: "auto",
      padding: 3,
      code: {
        backgroundColor: "darken",
        color: "text",
        lineHeight: "body"
      }
    },
    ol: {
      color: "text"
    },
    ul: {
      color: "text"
    },
    li: {
      color: "text",
      lineHeight: "body"
    },
    blockquote: {
      borderLeftColor: "primary",
      borderLeftStyle: 0,
      borderLeftWidth: 1,
      padding: 2,
      backgroundColor: "darken",
      p: {
        margin: 0
      }
    },
    hr: {
      border: 0,
      borderStyle: 0,
      color: "muted",
      marginTop: 5,
      marginBottom: 5
    },
    em: {},
    table: {
      color: "text",
      border: 0,
      borderStyle: 0,
      borderColor: "gray",
      borderCollapse: "collapse",
      mb: 3
    },
    tr: {},
    th: {
      backgroundColor: "darken",
      border: 0,
      borderStyle: 0,
      borderColor: "gray",
      padding: 2
    },
    td: {
      border: 0,
      borderStyle: 0,
      borderColor: "gray",
      padding: 2
    },
    strong: {},
    del: {},
    b: {},
    i: {},
    progress: {
      backgroundColor: "darken",
      color: "primary",
      secondary: {
        backgroundColor: "darken",
        color: "secondary"
      }
    },
    donut: {
      primary: {
        color: "primary"
      },
      secondary: {
        color: "secondary"
      }
    },
    spinner: {
      primary: {
        color: "primary"
      },
      secondary: {
        color: "secondary"
      }
    }
  },
  box: {},
  flex: {},
  grids: {},
  buttons: {
    backgroundColor: "primary",
    primary: {
      textTransform: "capitalize"
    },
    secondary: {
      textTransform: "capitalize",
      color: "background",
      backgroundColor: "secondary",
      ":hover" : {
        color: "background"
      }
    },
    close: {},
    icon: {},
    menu: {}
  },
  text: {
    text: {},
    heading: {}
  },
  links: {
    nav: {
      color: "primary"
    }
  },
  images: {
    avatar: {}
  },
  cards: {
    primary: {
      color: "text",
      boxShadow: 0,
      backgroundColor: "darken"
    }
  },
  layout: {
    container: {}
  },
  forms: {
    label: {
      color: "text",
      alignItems: "center",
      fontWeight: "bold",
      marginBottom: 2
    },
    input: {
      color: "text"
    },
    select: {
      color: "text"
    },
    textarea: {
      color: "text"
    },
    slider: {
      color: "primary",
      backgroundColor: "muted"
    },
    radio: {},
    checkbox: {}
  },
  badges: {
    primary: {
      backgroundColor: "primary"
    },
    secondary: {
      backgroundColor: "secondary",
      color: "background"
    }
  },
  alerts: {
    primary: {
      backgroundColor: "primary"
    },
    secondary: {
      backgroundColor: "secondary",
      color: "background"
    }
  },
  messages: {
    primary: {
      color: "text",
      backgroundColor: "darken",
      borderLeftColor: "primary"
    },
    secondary: {
      color: "text",
      backgroundColor: "darken",
      borderLeftColor: "secondary"
    }
  }
}