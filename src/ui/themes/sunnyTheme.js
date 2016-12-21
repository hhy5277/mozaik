/*
@todo include those vars if required
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,200,700,800|Montserrat:400,700");

theme-yellow = {
  // DASHBOARD
  dashboard-header-txt-color     : #453d3a,
}

.time__clock {
  background-color: themes[yellow][widget-header-bg-color];
}
.time__clock__outer-circle {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15) inset
  border-color: themes[yellow][widget-header-txt-color];
  background-color: themes[yellow][widget-bg-color];
}
.time__clock__inner-circle,
.time__clock__hande {
  background-color: themes[yellow][widget-header-icon-color];
}
.time__clock__brand {
  //color: darken(themes[yellow][widget-header-bg-color], 10);
}
*/

const sunnyTheme = {
    colors: {
        background: '#e5dabe',
        text:       '#444',
        textMute:   '#c0ab7f',
        unknown:    '#c0ab7f',
        success:    '#4eb6a3',
        warning:    '#d1be65',
        failure:    '#ff9176',
    },
    fonts: {
        default: `normal normal 400 1.8vmin/3vmin 'Open sans', sans-serif`,
    },
    dashboard: {
        header: {
            bgColor: '#e6d280',
            overrides: {},
        },
    },
    settings: {
        shadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
    },
    card: {
        bgColor: '#ede2c6',
        shadow:  '0 10px 10px rgba(0, 0, 0, 0.15)',
    },
    widget: {
        spacing:      '1.6vmin',
        borderRadius: '2px',
        bgColor:      '#ede2c6',
        shadow:       '0 1px 1px rgba(0, 0, 0, 0.1)',
        header: {
            bgColor:   '#e6d280',
            textColor: '#735e39',
            height:    '5vmin',
            font:      `normal normal 300 2vmin/4vmin 'Montserrat', sans-serif`,
            overrides: {
                textTransform: 'uppercase',
                fontSize:      '1.6vmin',
            },
            subject: {
                overrides: {
                    color: '#523d25',
                },
            },
            count: {
                bgColor:      '#e5dabe',
                textColor:    '#cb684d',
                borderRadius: '3px',
                padding:      '3px 6px',
            },
            icon: {
                size:  '2vmin',
                color: '#ce6c51',
            },
        },
    },
    list: {
        item: {
            border:    '1px solid #e5dabe',
            overrides: {},
            meta: {
                overrides: {
                    color:     'hsl(0, 52%, 60%)',
                    fontStyle: 'italic',
                },
            },
        },
    },
    label: {
        bgColor:      '#f7ecd0',
        textColor:    '#444',
        borderRadius: '2px',
        addon:        {
            bgColor:   '#ecd886',
            textColor: '#444',
        },
    },
    table: {
        cell: {
            head: {
                overrides: {
                    borderBottom: '1px solid #e6d280',
                },
            },
        },
    },
    charts: {
        axis: {
            fontSize:       '1.3vmin',
            textColor:      '#735e39',
            legendFontSize: '1.3vmin',
            legendColor:    '#735e39',
        },
        grid: {
            stroke:          '#dfcea6',
            strokeDasharray: 'none',
        },
    },
}


export default sunnyTheme
