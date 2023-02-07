from flask import Flask
from flask import request
from flask_cors import CORS
import subprocess
import numpy
import pip
import png
import os
import shutil
from PIL import Image
import time
from datetime import date


# app = Flask(__name__)
app = Flask(__name__)
CORS(app)
input_data = ""
output_data = "./images/result.png"

ColourData={
     1: "#f2d2bd"
    ,2: "#2f5354"
    ,3: "#bf152f"
    ,4: "#230a52"
    ,5: "#78809e"
    ,6: "#eda528"
    ,7: "#374370"
    ,8: "#2d5073"
    ,9: "#0f1b8a"
    ,10: "#36e800"
    ,11: "#c21404"
    ,12: "#faab00"
    ,13: "#e64830"
    ,14: "#f0b922"
    ,15: "#52391c"
    ,16: "#ed8d51"
    ,17: "#f0be0a"
    ,18: "#a87919"
    ,19: "#6b5220"
    ,20: "#dedac1"
    ,21: "#946935"
    ,22: "#665f50"
    ,23: "#45371e"
    ,24: "#262625"
    ,25: "#a88d42"
    ,26: "#ed6218"
    ,27: "#1b224a"
    ,28: "#ba7c09"
    ,29: "#2e1457"
    ,30: "#84abb8"
    ,31: "#23452a"
    ,32: "#110b4d"
    ,33: "#613b0d"
    ,34: "#bbdb1a"
    ,35: "#525966"
    ,36: "#374257"
    ,37: "#ed8d0e"
    ,38: "#c92aaf"
    ,39: "#46335c"
    ,40: "#5d4f6e"
    ,41: "#4f5e55"
    ,42: "#1c4970"
    ,43: "#102917"
    ,44: "#90b5d6"
    ,45: "#8ead9a"
    ,46: "#703f58"
    ,47: "#96966c"
    ,48: "#5b9ec2"
    ,49: "#5b75c2"
    ,50: "#9e983c"
    ,51: "#ded9da"
    ,52: "#debb1d"
    ,53: "#e6224d"
    ,54: "#e6b381"
    ,55: "#f08316"
    ,56: "#0e7835"
    ,57: "#e08931"
    ,58: "#c46e31"
    ,59: "#c2591d"
    ,60: "#e070d3"
    ,61: "#c297bd"
    ,62: "#38250f"
    ,63: "#5e1b48"
    ,64: "#477a4a"
    ,65: "#131442"
    ,66: "#b5e3eb"
    ,67: "#3f4c5c"
    ,68: "#a5b9d1"
    ,69: "#544533"
    ,70: "#808891"
    ,71: "#402c17"
    ,72: "#0b0675"
    ,73: "#2b2a33"
    ,74: "#524f4c"
    ,75: "#1f293b"
    ,76: "#9599a3"
    ,77: "#1b1d21"
    ,78: "#5e454a"
    ,79: "#8a83a6"
    ,80: "#855a82"
    ,81: "#bbbec7"
    ,82: "#9da7c4"
    ,83: "#822b65"
    ,84: "#583ca3"
    ,85: "#d4bc5d"
    ,86: "#d316e0"
    ,87: "#73777d"
    ,88: "#594425"
    ,89: "#6e839c"
    ,90: "#5e97db"
    ,91: "#471980"
    ,92: "#ceeb3d"
    ,93: "#2fd5de"
    ,94: "#4d411b"
    ,95: "#3b372b"
    ,96: "#6e560d"
    ,97: "#0a3306"
    ,98: "#3b2a0a"
    ,99: "#110624"
    ,100: "#7a7061"
    ,101: "#805945"
    ,102: "#635853"
    ,103: "#545f6b"
    ,104: "#c7be8d"
    ,105: "#d9bf30"
    ,106: "#b1c1de"
    ,107: "#a591c9"
    ,108: "#2b2003"
    ,109: "#3a1959"
    ,110: "#4a0c85"
    ,111: "#695a54"
    ,112: "#47404d"
    ,113: "#523427"
    ,114: "#65507a"
    ,115: "#847691"
    ,116: "#312f33"
    ,117: "#32414d"
    ,118: "#2e1e0c"
    ,119: "#f54900"
    ,120: "#666560"
    ,121: "#7a340b"
    ,122: "#c74f1c"
    ,123: "#4a0cad"
    ,124: "#56f246"
    ,125: "#616334"
    ,126: "#3d400d"
    ,127: "#5dad55"
    ,128: "#523136"
    ,129: "#278a1a"
    ,130: "#f0fc03"
    ,131: "#9e4452"
    ,132: "#292b28"
    ,133: "#343634"
    ,134: "#22471d"
    ,135: "#5c3d19"
    ,136: "#59280b"
    ,137: "#b5b7ba"
    ,138: "#76777a"
    ,139: "#e6eaf0"
    ,140: "#e8e0ba"
    ,141: "#ccc085"
    ,142: "#2c4028"
    ,143: "#969486"
    ,144: "#786f30"
    ,145: "#394537"
    ,146: "#6f786d"
    ,147: "#594d4c"
    ,148: "#25b4db"
    ,149: "#543b39"
    ,150: "#2e333b"
    ,151: "#63130f"
    ,152: "#1f2e20"
    ,153: "#7feb88"
    ,154: "#b0a889"
    ,155: "#62b0de"
    ,156: "#7a6443"
    ,157: "#85d4ff"
    ,158: "#47394d"
    ,159: "#cae2e8"
    ,160: "#1b0c21"
    ,161: "#301c2c"
    ,162: "#34364d"
    ,163: "#ad688f"
    ,164: "#363530"
    ,165: "#575341"
    ,166: "#616df2"
    ,167: "#d45fc0"
    ,168: "#e0afd8"
    ,169: "#224d32"
    ,170: "#22994e"
    ,171: "#704c3b"
    ,172: "#5c5f66"
    ,173: "#30251f"
    ,174: "#8fa0db"
    ,175: "#636d82"
    ,176: "#91c5cf"
    ,177: "#785a3e"
    ,178: "#87dade"
    ,179: "#aee3e6"
    ,180: "#a8b2b3"
    ,181: "#335d6b"
    ,182: "#523c27"
}

def install(package):
    if hasattr(pip, 'main'):
        pip.main(['install', package])
    else:
        pip._internal.main(['install', package])

@app.route("/outputimage")
def outputimage():
    return{"outputimage": output_data}

@app.route("/inputimage", methods=['POST'])
def inputimage():
    if request.method == 'POST':
        print('inputdataaaa')
        input_data = request.get_json()
        [width, height] = input_data['dim']
        input_list = input_data['data_list']

        # write into txt for checking
        # with open('GFG', 'w') as f:
        #     # using csv.writer method from CSV package
        #     write = csv.writer(f)
        #     write.writerow(input_list)

        # print('inputdataaaa: ', input_list)
        
        # process data
        ColourData_list = {k: hex_to_declist(v) for (k,v) in ColourData.items()}

        processed_data = []

        def totuple(a): # helper function
            try:
                return tuple(totuple(i) for i in a)
            except TypeError:
                return a

        def handle_mismatch_pixel(wrong_pix, row, col):
            neighboring_pixels = []
            radius = 3

            for i in range(row-radius, row+radius+1):
                for j in range(col-radius*4, col+radius*4+4, 4):
                    if (i >= 0 and i < height) and (j >= 0 and j < width*4):
                        neighboring_pixels.append(input_list[i*width*4+j : i*width*4+j+3])

            neighboring_pixels = [n for n in neighboring_pixels if n != wrong_pix]
            similarity_scores = {}
            for n in neighboring_pixels:
                similarity_scores[tuple(n)] = sum( abs(wrong_pix[ind]-n[ind]) for ind in range(len(wrong_pix)) )

            sorted_similarity_scores = sorted(similarity_scores.items(), key=lambda x: x[1], reverse=False)
            
            assigned_colour = 157
            for (key, v) in sorted_similarity_scores:
                if list(key) in list(ColourData_list.values()):
                    assigned_colour = list(ColourData_list.keys())[list(ColourData_list.values()).index(list(key))]
                    break          
            
            return assigned_colour

        for row in range(height):
            offset = row*width*4
            row_data = []
            for i in range(0, width*4, 4):
                try:
                    this_index = list(ColourData_list.keys())[list(ColourData_list.values()).index(input_list[offset+i:offset+i+3])]
                except ValueError as e:
                    # this_index = 157 # TODO: fix white patches
                    this_index = handle_mismatch_pixel(input_list[offset+i:offset+i+3], row, i)
                row_data.append([this_index-1, this_index-1, this_index-1])
            row_data = totuple(numpy.array(row_data).flatten())
            processed_data.append(row_data)

        f = open('foo.png', 'wb')
        w = png.Writer(width, height, greyscale=False)
        w.write(f, processed_data)
        f.close()
        # change to grey scale
        img_rgb = Image.open('foo.png')
        img_gray = img_rgb.convert('L')
        curr_dir = '/Users/anyiwang/Desktop/rebuild/'
        img_gray.save(f'{curr_dir}archive/foo.png')

        print('saved image!')

        # curr_dir = os.getcwd()
        

        os.chdir(curr_dir)

        # remove previous result
        try:
            os.remove(f'{curr_dir}/reactapp1/src/images/foo.png')
        except Exception as e:
            pass

        # move image to test directory
        shutil.copy( #copy from archive to val_inst
            f'{curr_dir}/archive/foo.png', 
            f'{curr_dir}/SPADE/datasets/custom_test_anyi/val_inst/foo.png'
        )
        shutil.copy( # copy to val_label
            f'{curr_dir}/SPADE/datasets/custom_test_anyi/val_inst/foo.png', 
            f'{curr_dir}/SPADE/datasets/custom_test_anyi/val_label/foo.png'
        )
        os.chdir(f'{curr_dir}/SPADE/')
        subprocess.call(['sh', 'test.sh'])
        time.sleep(10)
        try:
            shutil.move( # move result from SPADE result dir to Frontend src/image 
                f'{curr_dir}/SPADE/results/coco_pretrained/test_latest/images/synthesized_image/foo.png',
                f'{curr_dir}/reactapp1/src/images/'
            )
        except FileNotFoundError as e:
            time.sleep(10)
            shutil.move(
                f'{curr_dir}/SPADE/results/coco_pretrained/test_latest/images/synthesized_image/foo.png',
                f'{curr_dir}/reactapp1/src/images/'
            )
        
        # remove leftover images from val_
        os.remove(f'{curr_dir}/SPADE/datasets/custom_test_anyi/val_inst/foo.png')
        os.remove(f'{curr_dir}/SPADE/datasets/custom_test_anyi/val_label/foo.png')

        # rename archived image
        today = date.today()
        datetime_now = today.strftime("%d_%m_%Y")
        shutil.copy(f'{curr_dir}/archive/foo.png', f'{curr_dir}/archive/foo2.png')
        os.rename(f'{curr_dir}/archive/foo2.png',
            f'{curr_dir}/archive/{ datetime_now }.png'    
        )

        # os.chdir(f'{curr_dir}/')

        return{"outputimage": "hi"}

# helper functions
def hex_to_declist(hex):
    result = []
    result.append(int(hex[1:3],16))
    result.append(int(hex[3:5],16))
    result.append(int(hex[5:7],16))
    return result

if __name__ == "__main__":
    app.run(debug=True)