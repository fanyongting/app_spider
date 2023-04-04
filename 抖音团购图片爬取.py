# 小桔家川派烤肉
import base64
import random
import time

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
md5_byte = []

# 滑动屏幕到下一张图片
def huadong():
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(914, 922)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.move_to_location(580, 904)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    loguru.logger.debug(f'滑动一次喽')
# 保存首页图片
def into_pic():
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(1006, 162)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(random.randint(1,4))
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(328, 307)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(random.randint(1, 4))
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(159, 745)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(random.randint(1, 4))
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(191, 402)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(random.randint(1, 4))
    i = 0
    num = 1
    while i < 9:
        # img_md5 = driver.find_element_by_xpath('//img[@id="screenshot"]/@src').get_attribute('text')
        img_md5 = driver.get_screenshot_as_base64()
        md5_byte.append(img_md5)
        loguru.logger.debug(f'正在将标题图片MD5写入')
        time.sleep(random.randint(1, 4))
        i += 1
        num += 1
        # // x1 922 y1 979 x2  y2
        huadong()
    # 图片保存完成后，将界面返回
    # driver.back()
#抓取特色菜图片
def tese_pic():
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(81, 205)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(random.randint(1, 4))
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(575, 1461)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.move_to_location(614, 932)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(random.randint(1, 4))
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(953, 981)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(random.randint(1, 4))
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(226, 409)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(random.randint(1, 4))
    i = 0
    while i < 18:
        # item = driver.find_element_by_xpath('//img[@id="screenshot"]/@src').get_attribute('text')
        item = driver.get_screenshot_as_base64()
        md5_byte.append(item)
        loguru.logger.debug(f'正在将特色菜图片MD5写入')
        time.sleep(random.randint(1, 4))
        i += 1
        huadong()
    # 返回界面
    driver.back()
    driver.quit()


def save_pic(md5_list):
    name = 1
    for i in md5_list:
        img = i.split(',')[1]
        time.sleep(random.randint(1, 4))
        open(f'{name}.jpg', 'wb').write(base64.b64decode(img))
        name += 1
def main():
    into_pic()
    tese_pic()
    save_pic(md5_byte)

if __name__ == '__main__':
    main()
