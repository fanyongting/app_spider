# from appium import webdriver


# For W3C actions
from appium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from loguru import logger
from selenium.common.exceptions import NoSuchElementException

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
item = driver.find_elements_by_xpath('//android.widget.Button[@content-desc="关闭"]')[0]
if item:
    item.click()

driver.find_elements_by_xpath('//android.widget.LinearLayout[@content-desc="搜索，按钮"]')[0].click()
driver.find_elements_by_xpath('//com.lynx.tasm.behavior.ui.view.UIView[@content-desc="，大桔家川派烤肉，按钮"]')[
    0].click()
driver.tap([66, 847], [1014, 1089])
driver.tap([579, 402])
driver.tap([392, 388])
'''
获取图片的md5值
xpath路径//img[@id="screenshot"]
driver.find_element_by_xpath('//img[@id="screenshot"]/attr(img)')[0].get_attribute('text')
'''


driver.quit()
