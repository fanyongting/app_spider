# 小桔家川派烤肉
import base64
import random
import time
from PIL import Image
from appium import webdriver
# from appium.webdriver.common.appiumby import AppiumBy
import loguru
# For W3C actions
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.actions import interaction
from selenium.webdriver.common.actions.action_builder import ActionBuilder
from selenium.webdriver.common.actions.pointer_input import PointerInput

caps = {}
caps["platformName"] = "Android"
caps["appium:deviceName"] = "Redmi_K30_5G"
caps["appium:appPackage"] = "com.ss.android.ugc.aweme"
caps["appium:appActivity"] = ".splash.SplashActivity"
caps["appium:noReset"] = True
caps["appium:unicodekeyboard"] = True
caps["appium:resetkeyboard"] = True
caps["appium:ensureWebviewsHavePages"] = True
caps["appium:nativeWebScreenshot"] = True
caps["appium:newCommandTimeout"] = 3600
caps["appium:connectHardwareKeyboard"] = True


driver = webdriver.Remote("http://127.0.0.1:4723/wd/hub", caps)
# 主页图片滑动
def huadong():
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(914, 922)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.move_to_location(580, 904)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    loguru.logger.debug(f'滑动一次喽')
    time.sleep(1)

# 主页图片抓取
def info_pic():
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(995, 162)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(2)
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(445, 311)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(2)
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(508, 554)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(2)
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(318, 438)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(2)

    i = 1
    name = 19
    while i < 10:
        time.sleep(1)
        img_md5 = driver.get_screenshot_as_png()
        loguru.logger.debug(f'主页图片抓取')
        open(f'图片/{name}.png', 'wb').write(img_md5)

        i += 1
        name += 1
        huadong()
    driver.back()

# 将图片进行裁剪
def cop(open_name, save_name):
    left_x, left_y, right_x, right_y = 0, 760, 1080, 1560
    im = Image.open(open_name)
    im2 = im.crop((left_x, left_y, right_x, right_y,))
    im2.save(save_name)

# 特色菜滑动
def huadong2():
    time.sleep(4)
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(446, 1357)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.move_to_location(461, 976)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    loguru.logger.debug(f'特色菜滑动')
    time.sleep(4)

# 将图片拖动到一个位置
def huadong3():
    driver.swipe(510,620, 500, 180, duration=5000)

# 抓取特色菜图片
def tese_pic():
    time.sleep(4)
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(220, 1703)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    loguru.logger.debug(f'抓取特色菜喽')
    time.sleep(4)
    i = 0
    num = 1
    while i < 18:
        time.sleep(1)
        img_md5 = driver.get_screenshot_as_png()
        loguru.logger.debug(f'特色菜图片抓取')
        open(f'图片/{num}.png', 'wb').write(img_md5)
        # time.sleep(random.randint(1, 4))
        i += 1
        num += 1
        huadong2()
    # 进行图片截取

    driver.quit()

if __name__ == '__main__':
    info_pic()
    tese_pic()
