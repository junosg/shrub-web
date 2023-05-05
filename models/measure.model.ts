export const measures = {
    nominal: {key: "nominal", value: "Nominal"},
    ordinal: {key: "ordinal", value: "Ordinal"},
    interval: {key: "interval", value: "Interval"},
    ratio: {key: "ratio", value: "Ratio"}
}

export type Measure = `${'nominal'|'ordinal'|'interval'|'ratio'}`
