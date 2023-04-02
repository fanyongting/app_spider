import json
import os

from appium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from loguru import logger
from selenium.common.exceptions import NoSuchElementException

caps = {}
caps["platformName"] = "Android"
caps["appium:deviceName"] = "Redmi_K30_5G"
caps["appium:appPackage"] = "com.goldze.mvvmhabit"
caps["appium:appActivity"] = ".ui.MainActivity"
caps["appium:noReset"] = True
caps["appium:ensureWebviewsHavePages"] = True
caps["appium:nativeWebScreenshot"] = True
caps["appium:newCommandTimeout"] = 3600
caps["appium:connectHardwareKeyboard"] = True
PACKAGE_NAME = caps["appium:appPackage"]

driver = webdriver.Remote("http://127.0.0.1:4723/wd/hub", caps)
wait = WebDriverWait(driver, 30)
window_size = driver.get_window_size()
window_width, window_height = window_size.get('width'), window_size.get('height')
scrape_list = []
TOTAL_NUMBER = 100
OUTPUT_FOLDER = 'movie'
os.path.exists(OUTPUT_FOLDER) or os.makedirs(OUTPUT_FOLDER)


# 定义函数，抓取需要的数据(一个块)
# 通过使用util方法等待匹配的数据，并将其赋值为items并将其赋值
def scrape_index():
    '''

    :return: data block
    '''
    items = wait.until(EC.presence_of_all_elements_located(
        (By.XPATH, f'//android.widget.LinearLayout[@resource-id="{PACKAGE_NAME}:id/item"]')
    ))
    return items


def scrape_detail(element):
    '''

    :param element: data block
    :return: block item
    '''
    logger.debug(f'scrape {element}')
    element.click()
    wait.until(EC.presence_of_all_elements_located(
        (By.ID, f'{PACKAGE_NAME}:id/detail')
    ))
    title = wait.until(EC.presence_of_element_located(
        (By.ID, f'{PACKAGE_NAME}:id/title')
    )).get_attribute('text')
    categories = wait.until(EC.presence_of_element_located(
        (By.ID, f'{PACKAGE_NAME}:id/categories_value')
    )).get_attribute('text')
    score = wait.until(EC.presence_of_element_located(
        (By.ID, f'{PACKAGE_NAME}:id/score_value')
    )).get_attribute('text')
    minute = wait.until(EC.presence_of_element_located(
        (By.ID, f'{PACKAGE_NAME}:id/minute_value')
    )).get_attribute('text')
    published_at = wait.until(EC.presence_of_element_located(
        (By.ID, f'{PACKAGE_NAME}:id/published_at_value')
    )).get_attribute('text')
    drama = wait.until(EC.presence_of_element_located(
        (By.ID, f'{PACKAGE_NAME}:id/drama_value')
    )).get_attribute('text')
    driver.back()

    return {
        'title': title,
        'categories': categories,
        'score': score,
        'minute': minute,
        'published_at': published_at,
        'drama': drama
    }


# 上拉操作
def scroll_up():
    driver.swipe(window_width * 0.5, window_height * 0.8,
                 window_width * 0.5, window_height * 0.5,
                 1000)


# 去重， 终止， 保存数据
def get_element_title(element):
    try:
        element_title = element.find_element_by_id(f'{PACKAGE_NAME}:id/tv_title').get_attribute('text')
        return element_title
    except NoSuchElementException:
        return None


# 保存数据
def save_data(element_data):
    with open(f'{OUTPUT_FOLDER}/{element_data.get("title")}.json', 'w', encoding='utf-8') as f:
        f.write(json.dumps(element_data, ensure_ascii=False, indent=2))
        logger.debug(f'saved as file {element_data.get("title")}.json')


# 定义一个函数入口main
def main():
    while len(scrape_list) < TOTAL_NUMBER:
        elements = scrape_index()
        for element in elements:
            element_title = get_element_title(element)
            if not element_title or element_title in scrape_list:
                continue
            element_location = element.location
            element_y = element_location.get('y')
            if element_y / window_height > 0.8:
                logger.debug(f'scroll up')
                scroll_up()
            element_data = scrape_detail(element)
            scrape_list.append(element_title)
            logger.debug(f'scraped data {element_data}')
            save_data(element_data)



if __name__ == '__main__':
    main()
