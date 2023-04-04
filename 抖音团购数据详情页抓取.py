import time
import loguru
from appium import webdriver
# from appium.webdriver.common.appiumby import AppiumBy

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

# 进入详情页页面
def into_info():
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(1009, 166)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(2)
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(328, 304)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(2)
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(473, 554)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(2)
    actions = ActionChains(driver)
    actions.w3c_actions = ActionBuilder(driver, mouse=PointerInput(interaction.POINTER_TOUCH, "touch"))
    actions.w3c_actions.pointer_action.move_to_location(512, 1218)
    actions.w3c_actions.pointer_action.pointer_down()
    actions.w3c_actions.pointer_action.pause(0.1)
    actions.w3c_actions.pointer_action.release()
    actions.perform()
    time.sleep(2)

    # driver.find_el
    title = driver.find_element_by_xpath('//com.lynx.tasm.behavior.ui.text.FlattenUIText[@content-desc="【百店好品】烤肉外带8荤8素3-4人套餐（送电烤炉）"]').get_attribute('text')
    loguru.logger.debug(f'{title}')
    jiage = driver.find_element_by_xpath('//com.lynx.tasm.behavior.ui.view.UIView[@content-desc="原价455元,现价168元"]').get_attribute('text')
    loguru.logger.debug(f'{jiage}')
    zhekou = driver.find_element_by_xpath('//com.lynx.tasm.behavior.ui.LynxFlattenUI[@content-desc="3.7折"]').get_attribute('text')
    loguru.logger.debug(f'{zhekou}')
    # xiaoliang = driver.find_element_by_('//com.lynx.tasm.behavior.ui.LynxFlattenUI[@content-desc="已售245107份"]').get_attribute('text')
    # loguru.logger.debug(f'{xiaoliang}')
    info = []
    huadong2()
    items = driver.find_elements_by_xpath('//com.lynx.tasm.behavior.ui.LynxFlattenUI/@content-desc')
    for item in items:
        print(item)
        info.append(item)
        open('info.txt', 'w').write(str(item))
    driver.back()
    driver.quit()

if __name__ == '__main__':
    into_info()


