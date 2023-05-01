import React, { Component } from 'react';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CollectionsIcon from '@mui/icons-material/Collections';

export const SidebarData = [
    {
        index: 0,
        title: "Colour",
        icon: <ColorLensIcon />,
        link: "/colour"
    },
    {
        index: 1,
        title: "References",
        icon: <CollectionsIcon />,
        link: "/references"
    }
]

export const CategoryData = [
    {
        index: 0,
        category_name:'nature',
        colour_indices: [106,120,125,126,127,130,135,136,148,150,154,155,157,159,162,178,179]
    },
    {
        index: 1,
        category_name:'plants',
        colour_indices: [64,94,97,118,124,129,134,142,169]
    },
    {
        index: 2,
        category_name:'human and animals',
        colour_indices: [1,16,17,18,19,20,21,22,23,24,25]
    },
    {
        index: 3,
        category_name:'food',
        colour_indices: [52,53,54,55,56,57,58,59,60,61,121,122,153,170]
    },
    {
        index: 4,
        category_name:'vehicles',
        colour_indices: [2,3,4,5,6,7,8,9,10]
    },
    {
        index: 5,
        category_name:'household objects',
        colour_indices: [45,46,47,48,49,50,51,62,63,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,85,86,89,90,91,93,98,101,102,103,109,110,112,113,114,115,116,117,118
            ,123,131,133,141,151,152,156,165,168,171,172,173,174,175,176,177,180,181]
    },
    {
        index: 6,
        category_name:'other objects',
        colour_indices: [11,12,13,14,15,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,84,87,88,92,95,96,99,105,107,108,111,128,137,138,140,144,145,146,147,149,158,161
            ,163,164,266]
    },
    {
        index: 7,
        category_name:'materials',
        colour_indices: [100,104,132,139,143,160,26,182]
    },
]

export const ColourData =[
    {
        index: 1,
        object: 'person',
        colour_code: "#f2d2bd"
    },
    {
        index: 2,
        object: 'bicycle',
        colour_code: "#2f5354"
    },
    {
        index: 3,
        object: 'car',
        colour_code: "#bf152f"
    },
    {
        index: 4,
        object: 'motorcycle',
        colour_code: "#230a52"
    },
    {
        index: 5,
        object: 'airplane',
        colour_code: "#78809e"
    },
    {
        index: 6,
        object: 'bus',
        colour_code: "#eda528"
    },
    {
        index: 7,
        object: 'train',
        colour_code: "#374370"
    },
    {
        index: 8,
        object: 'truck',
        colour_code: "#2d5073"
    },
    {
        index: 9,
        object: 'boat',
        colour_code: "#0f1b8a"
    },
    {
        index: 10,
        object: 'traffic light',
        colour_code: "#36e800"
    },
    {
        index: 11,
        object: 'fire hydrant',
        colour_code: "#c21404"
    },
    {
        index: 12,
        object: 'street sign',
        colour_code: "#faab00"
    },
    {
        index: 13,
        object: 'stop sign',
        colour_code: "#e64830"
    },
    {
        index: 14,
        object: 'parking meter',
        colour_code: "#f0b922"
    },
    {
        index: 15,
        object: 'bench',
        colour_code: "#52391c"
    },
    {
        index: 16,
        object: 'bird',
        colour_code: "#ed8d51"
    },
    {
        index: 17,
        object: 'cat',
        colour_code: "#f0be0a"
    },
    {
        index: 18,
        object: 'dog',
        colour_code: "#a87919"
    },
    {
        index: 19,
        object: 'horse',
        colour_code: "#6b5220"
    },
    {
        index: 20,
        object: 'sheep',
        colour_code: "#dedac1"
    },
    {
        index: 21,
        object: 'cow',
        colour_code: "#946935"
    },
    {
        index: 22,
        object: 'elephant',
        colour_code: "#665f50"
    },
    {
        index: 23,
        object: 'bear',
        colour_code: "#45371e"
    },
    {
        index: 24,
        object: 'zebra',
        colour_code: "#262625"
    },
    {
        index: 25,
        object: 'giraffe',
        colour_code: "#a88d42"
    },
    {
        index: 26,
        object: 'hat',
        colour_code: "#ed6218"
    },
    {
        index: 27,
        object: 'backpack',
        colour_code: "#1b224a"
    },
    {
        index: 28,
        object: 'umbrella',
        colour_code: "#ba7c09"
    },
    {
        index: 29,
        object: 'shoe',
        colour_code: "#2e1457"
    },
    {
        index: 30,
        object: 'eye glasses',
        colour_code: "#84abb8"
    },
    {
        index: 31,
        object: 'handbag',
        colour_code: "#23452a"
    },
    {
        index: 32,
        object: 'tie',
        colour_code: "#110b4d"
    },
    {
        index: 33,
        object: 'suitcase',
        colour_code: "#613b0d"
    },
    {
        index: 34,
        object: 'frisbee',
        colour_code: "#bbdb1a"
    },
    {
        index: 35,
        object: 'skis',
        colour_code: "#525966"
    },
    {
        index: 36,
        object: 'snowboard',
        colour_code: "#374257"
    },
    {
        index: 37,
        object: 'sports ball',
        colour_code: "#ed8d0e"
    },
    {
        index: 38,
        object: 'kite',
        colour_code: "#c92aaf"
    },
    {
        index: 39,
        object: 'baseball bat',
        colour_code: "#46335c"
    },
    {
        index: 40,
        object: 'baseball glove',
        colour_code: "#5d4f6e"
    },
    {
        index: 41,
        object: 'skateboard',
        colour_code: "#4f5e55"
    },
    {
        index: 42,
        object: 'surfboard',
        colour_code: "#1c4970"
    },
    {
        index: 43,
        object: 'tennis racket',
        colour_code: "#102917"
    },
    {
        index: 44,
        object: 'bottle',
        colour_code: "#90b5d6"
    },
    {
        index: 45,
        object: 'plate',
        colour_code: "#8ead9a"
    },
    {
        index: 46,
        object: 'wine glass',
        colour_code: "#703f58"
    },
    {
        index: 47,
        object: 'cup',
        colour_code: "#96966c"
    },
    {
        index: 48,
        object: 'fork',
        colour_code: "#5b9ec2"
    },
    {
        index: 49,
        object: 'knife',
        colour_code: "#5b75c2"
    },
    {
        index: 50,
        object: 'spoon',
        colour_code: "#9e983c"
    },
    {
        index: 51,
        object: 'bowl',
        colour_code: "#ded9da"
    },
    {
        index: 52,
        object: 'banana',
        colour_code: "#debb1d"
    },
    {
        index: 53,
        object: 'apple',
        colour_code: "#e6224d"
    },
    {
        index: 54,
        object: 'sandwich',
        colour_code: "#e6b381"
    },
    {
        index: 55,
        object: 'orange',
        colour_code: "#f08316"
    },
    {
        index: 56,
        object: 'broccoli',
        colour_code: "#0e7835"
    },
    {
        index: 57,
        object: 'carrot',
        colour_code: "#e08931"
    },
    {
        index: 58,
        object: 'hot dog',
        colour_code: "#c46e31"
    },
    {
        index: 59,
        object: 'pizza',
        colour_code: "#c2591d"
    },
    {
        index: 60,
        object: 'donut',
        colour_code: "#e070d3"
    },
    {
        index: 61,
        object: 'cake',
        colour_code: "#c297bd"
    },
    {
        index: 62,
        object: 'chair',
        colour_code: "#38250f"
    },
    {
        index: 63,
        object: 'couch',
        colour_code: "#5e1b48"
    },
    {
        index: 64,
        object: 'potted plant',
        colour_code: "#477a4a"
    },
    {
        index: 65,
        object: 'bed',
        colour_code: "#131442"
    },
    {
        index: 66,
        object: 'mirror',
        colour_code: "#b5e3eb"
    },
    {
        index: 67,
        object: 'dining table',
        colour_code: "#3f4c5c"
    },
    {
        index: 68,
        object: 'window',
        colour_code: "#a5b9d1"
    },
    {
        index: 69,
        object: 'desk',
        colour_code: "#544533"
    },
    {
        index: 70,
        object: 'toilet',
        colour_code: "#808891"
    },
    {
        index: 71,
        object: 'door',
        colour_code: "#402c17"
    },
    {
        index: 72,
        object: 'tv',
        colour_code: "#0b0675"
    },
    {
        index: 73,
        object: 'laptop',
        colour_code: "#2b2a33"
    },
    {
        index: 74,
        object: 'mouse',
        colour_code: "#524f4c"
    },
    {
        index: 75,
        object: 'remote',
        colour_code: "#1f293b"
    },
    {
        index: 76,
        object: 'keyboard',
        colour_code: "#9599a3"
    },
    {
        index: 77,
        object: 'cell phone',
        colour_code: "#1b1d21"
    },
    {
        index: 78,
        object: 'microwave',
        colour_code: "#5e454a"
    },
    {
        index: 79,
        object: 'oven',
        colour_code: "#8a83a6"
    },
    {
        index: 80,
        object: 'toaster',
        colour_code: "#855a82"
    },
    {
        index: 81,
        object: 'sink',
        colour_code: "#bbbec7"
    },
    {
        index: 82,
        object: 'refrigerator',
        colour_code: "#9da7c4"
    },
    {
        index: 83,
        object: 'blender',
        colour_code: "#822b65"
    },
    {
        index: 84,
        object: 'book',
        colour_code: "#583ca3"
    },
    {
        index: 85,
        object: 'clock',
        colour_code: "#d4bc5d"
    },
    {
        index: 86,
        object: 'vase',
        colour_code: "#d316e0"
    },
    {
        index: 87,
        object: 'scissors',
        colour_code: "#73777d"
    },
    {
        index: 88,
        object: 'teddy bear',
        colour_code: "#594425"
    },
    {
        index: 89,
        object: 'hair drier',
        colour_code: "#6e839c"
    },
    {
        index: 90,
        object: 'toothbrush',
        colour_code: "#5e97db"
    },
    {
        index: 91,
        object: 'hair brush',
        colour_code: "#471980"
    },
    {
        index: 92,
        object: 'banner',
        colour_code: "#ceeb3d"
    },
    {
        index: 93,
        object: 'blanket',
        colour_code: "#2fd5de"
    },
    {
        index: 94,
        object: 'branch',
        colour_code: "#4d411b"
    },
    {
        index: 95,
        object: 'bridge',
        colour_code: "#3b372b"
    },
    {
        index: 96,
        object: 'building-other',
        colour_code: "#6e560d"
    },
    {
        index: 97,
        object: 'bush',
        colour_code: "#0a3306"
    },
    {
        index: 98,
        object: 'cabinet',
        colour_code: "#3b2a0a"
    },
    {
        index: 99,
        object: 'cage',
        colour_code: "#110624"
    },
    {
        index: 100,
        object: 'cardboard',
        colour_code: "#7a7061"
    },
    {
        index: 101,
        object: 'carpet',
        colour_code: "#805945"
    },
    {
        index: 102,
        object: 'ceiling-other',
        colour_code: "#635853"
    },
    {
        index: 103,
        object: 'ceiling-tile',
        colour_code: "#545f6b"
    },
    {
        index: 104,
        object: 'cloth',
        colour_code: "#c7be8d"
    },
    {
        index: 105,
        object: 'clothes',
        colour_code: "#d9bf30"
    },
    {
        index: 106,
        object: 'clouds',
        colour_code: "#b1c1de"
    },
    {
        index: 107,
        object: 'counter',
        colour_code: "#a591c9"
    },
    {
        index: 108,
        object: 'cupboard',
        colour_code: "#2b2003"
    },
    {
        index: 109,
        object: 'curtain',
        colour_code: "#3a1959"
    },
    {
        index: 110,
        object: 'desk-stuff',
        colour_code: "#4a0c85"
    },
    {
        index: 111,
        object: 'dirt',
        colour_code: "#695a54"
    },
    {
        index: 112,
        object: 'door-stuff',
        colour_code: "#47404d"
    },
    {
        index: 113,
        object: 'fence',
        colour_code: "#523427"
    },
    {
        index: 114,
        object: 'floor-marble',
        colour_code: "#65507a"
    },
    {
        index: 115,
        object: 'floor-other',
        colour_code: "#847691"
    },
    {
        index: 116,
        object: 'floor-stone',
        colour_code: "#312f33"
    },
    {
        index: 117,
        object: 'floor-tile',
        colour_code: "#32414d"
    },
    {
        index: 118,
        object: 'floor-wood',
        colour_code: "#2e1e0c"
    },
    {
        index: 119,
        object: 'flower',
        colour_code: "#f54900"
    },
    {
        index: 120,
        object: 'fog',
        colour_code: "#666560"
    },
    {
        index: 121,
        object: 'food-other',
        colour_code: "#7a340b"
    },
    {
        index: 122,
        object: 'fruit',
        colour_code: "#c74f1c"
    },
    {
        index: 123,
        object: 'furniture-other',
        colour_code: "#4a0cad"
    },
    {
        index: 124,
        object: 'grass',
        colour_code: "#56f246"
    },
    {
        index: 125,
        object: 'gravel',
        colour_code: "#616334"
    },
    {
        index: 126,
        object: 'ground-other',
        colour_code: "#3d400d"
    },
    {
        index: 127,
        object: 'hill',
        colour_code: "#5dad55"
    },
    {
        index: 128,
        object: 'house',
        colour_code: "#523136"
    },
    {
        index: 129,
        object: 'leaves',
        colour_code: "#278a1a"
    },
    {
        index: 130,
        object: 'light',
        colour_code: "#f0fc03"
    },
    {
        index: 131,
        object: 'mat',
        colour_code: "#9e4452"
    },
    {
        index: 132,
        object: 'metal',
        colour_code: "#292b28"
    },
    {
        index: 133,
        object: 'mirror-stuff',
        colour_code: "#343634"
    },
    {
        index: 134,
        object: 'moss',
        colour_code: "#22471d"
    },
    {
        index: 135,
        object: 'mountain',
        colour_code: "#5c3d19"
    },
    {
        index: 136,
        object: 'mud',
        colour_code: "#59280b"
    },
    {
        index: 137,
        object: 'napkin',
        colour_code: "#b5b7ba"
    },
    {
        index: 138,
        object: 'net',
        colour_code: "#76777a"
    },
    {
        index: 139,
        object: 'paper',
        colour_code: "#e6eaf0"
    },
    {
        index: 140,
        object: 'pavement',
        colour_code: "#e8e0ba"
    },
    {
        index: 141,
        object: 'pillow',
        colour_code: "#ccc085"
    },
    {
        index: 142,
        object: 'plant-other',
        colour_code: "#2c4028"
    },
    {
        index: 143,
        object: 'plastic',
        colour_code: "#969486"
    },
    {
        index: 144,
        object: 'platform',
        colour_code: "#786f30"
    },
    {
        index: 145,
        object: 'playingfield',
        colour_code: "#394537"
    },
    {
        index: 146,
        object: 'railing',
        colour_code: "#6f786d"
    },
    {
        index: 147,
        object: 'railroad',
        colour_code: "#594d4c"
    },
    {
        index: 148,
        object: 'river',
        colour_code: "#25b4db"
    },
    {
        index: 149,
        object: 'road',
        colour_code: "#543b39"
    },
    {
        index: 150,
        object: 'rock',
        colour_code: "#2e333b"
    },
    {
        index: 151,
        object: 'roof',
        colour_code: "#63130f"
    },
    {
        index: 152,
        object: 'rug',
        colour_code: "#1f2e20"
    },
    {
        index: 153,
        object: 'salad',
        colour_code: "#7feb88"
    },
    {
        index: 154,
        object: 'sand',
        colour_code: "#b0a889"
    },
    {
        index: 155,
        object: 'sea',
        colour_code: "#62b0de"
    },
    {
        index: 156,
        object: 'shelf',
        colour_code: "#7a6443"
    },
    {
        index: 157,
        object: 'sky-other',
        colour_code: "#85d4ff"
    },
    {
        index: 158,
        object: 'skyscraper',
        colour_code: "#47394d"
    },
    {
        index: 159,
        object: 'snow',
        colour_code: "#cae2e8"
    },
    {
        index: 160,
        object: 'solid-other',
        colour_code: "#1b0c21"
    },
    {
        index: 161,
        object: 'stairs',
        colour_code: "#301c2c"
    },
    {
        index: 162,
        object: 'stone',
        colour_code: "#34364d"
    },
    {
        index: 163,
        object: 'straw',
        colour_code: "#ad688f"
    },
    {
        index: 164,
        object: 'structural-other',
        colour_code: "#363530"
    },
    {
        index: 165,
        object: 'table',
        colour_code: "#575341"
    },
    {
        index: 166,
        object: 'tent',
        colour_code: "#616df2"
    },
    {
        index: 167,
        object: 'textile-other',
        colour_code: "#d45fc0"
    },
    {
        index: 168,
        object: 'towel',
        colour_code: "#e0afd8"
    },
    {
        index: 169,
        object: 'tree',
        colour_code: "#224d32"
    },
    {
        index: 170,
        object: 'vegetable',
        colour_code: "#22994e"
    },
    {
        index: 171,
        object: 'wall-brick',
        colour_code: "#704c3b"
    },
    {
        index: 172,
        object: 'wall-concrete',
        colour_code: "#5c5f66"
    },
    {
        index: 173,
        object: 'wall-other',
        colour_code: "#30251f"
    },
    {
        index: 174,
        object: 'wall-panel',
        colour_code: "#8fa0db"
    },
    {
        index: 175,
        object: 'wall-stone',
        colour_code: "#636d82"
    },
    {
        index: 176,
        object: 'wall-tile',
        colour_code: "#91c5cf"
    },
    {
        index: 177,
        object: 'wall-wood',
        colour_code: "#785a3e"
    },
    {
        index: 178,
        object: 'water-other',
        colour_code: "#87dade"
    },
    {
        index: 179,
        object: 'waterdrops',
        colour_code: "#aee3e6"
    },
    {
        index: 180,
        object: 'window-blind',
        colour_code: "#a8b2b3"
    },
    {
        index: 181,
        object: 'window-other',
        colour_code: "#335d6b"
    },
    {
        index: 182,
        object: 'wood',
        colour_code: "#523c27"
    },
]

// export const ColourData =[
//     {
//         index: 0,
//         object: "house",
//         colour_name: "Red",
//         colour_code: "#FF0000",
//     },
//     {
//         index: 1,
//         object: "sky",
//         colour_name: "Blue",
//         colour_code: "#0000FF",
//     },
//     {
//         index: 2,
//         object: "grass",
//         colour_name: "Green",
//         colour_code: "#00FF00",
//     },
//     {
//         index: 3,
//         object: "cat",
//         colour_name: "Yellow",
//         colour_code: "#FFFF00",
//     },
// ]
    

export const ReferencesData =[
    {
    data: 'pictures of stuff'
    }
]
