import metrics from "../metrics";

const size = {
    text_size_10 : metrics.screenWidth < 700 ? metrics.screenWidth * (10 / 360) : metrics.screenWidth * (10 / 540),
    text_size_11 : metrics.screenWidth < 700 ? metrics.screenWidth * (11 / 360) : metrics.screenWidth * (11 / 540),
    text_size_12 : metrics.screenWidth < 700 ? metrics.screenWidth * (12 / 360) : metrics.screenWidth * (12 / 540),
    text_size_13 : metrics.screenWidth < 700 ? metrics.screenWidth * (13 / 360) : metrics.screenWidth * (13 / 540),
    text_size_14 : metrics.screenWidth < 700 ? metrics.screenWidth * (14 / 360) : metrics.screenWidth * (14 / 540),
    text_size_16 : metrics.screenWidth < 700 ? metrics.screenWidth * (16 / 360) : metrics.screenWidth * (16 / 540),
    text_size_18 : metrics.screenWidth < 700 ? metrics.screenWidth * (18 / 360) : metrics.screenWidth * (18 / 540),
    text_size_20 : metrics.screenWidth < 700 ? metrics.screenWidth * (20 / 360) : metrics.screenWidth * (20 / 540),
    text_size_24 : metrics.screenWidth < 700 ? metrics.screenWidth * (24 / 360) : metrics.screenWidth * (24 / 540),
    text_size_28 : metrics.screenWidth < 700 ? metrics.screenWidth * (28 / 360) : metrics.screenWidth * (28 / 540),
    text_size_32 : metrics.screenWidth < 700 ? metrics.screenWidth * (32 / 360) : metrics.screenWidth * (32 / 540),
    size_01 : metrics.screenWidth * (1 / 412),
    size_02 : metrics.screenWidth * (2 / 412),
    size_03 : metrics.screenWidth * (3 / 412),
    size_04 : metrics.screenWidth * (4 / 412),
    size_05 : metrics.screenWidth * (5 / 412),
    size_06 : metrics.screenWidth * (6 / 412),
    size_07 : metrics.screenWidth * (7 / 412),
    size_08 : metrics.screenWidth * (8 / 412),
    size_09 : metrics.screenWidth * (9 / 412),
    size_10 : metrics.screenWidth * (10 / 412),
    size_11 : metrics.screenWidth * (11 / 412),
    size_12 : metrics.screenWidth * (12 / 412),
    size_13 : metrics.screenWidth * (13 / 412),
    size_14 : metrics.screenWidth * (14 / 412),
    size_15 : metrics.screenWidth * (15 / 412),
    size_16 : metrics.screenWidth * (16 / 412),
    size_17 : metrics.screenWidth * (17 / 412),
    size_18 : metrics.screenWidth * (18 / 412),
    size_19 : metrics.screenWidth * (19 / 412),
    size_20 : metrics.screenWidth * (20 / 412),
    size_22 : metrics.screenWidth * (22 / 412),
    size_24 : metrics.screenWidth * (24 / 412),
    size_26 : metrics.screenWidth * (26 / 412),
    size_28 : metrics.screenWidth * (28 / 412),
    size_30 : metrics.screenWidth * (30 / 412),
    size_32 : metrics.screenWidth * (32 / 412),
    size_34 : metrics.screenWidth * (34 / 412),
    size_36 : metrics.screenWidth * (36 / 412),
    size_38 : metrics.screenWidth * (38 / 412),
    size_40 : metrics.screenWidth * (40 / 412),
    size_50 : metrics.screenWidth * (50 / 412),
    size_60 : metrics.screenWidth * (60 / 412),
    size_70 : metrics.screenWidth * (70 / 412),
    size_75 : metrics.screenWidth * (75 / 412),
    size_80 : metrics.screenWidth * (80 / 412),
}

const weight = {
    full: '900',
    semi: '600',
    low: '400',
    bold: 'bold',
    normal: 'normal'
}

const type = {
}

export default {
    size,
    weight,
    type
}