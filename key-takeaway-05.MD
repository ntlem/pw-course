# DOM (Document Object Model)
- DOM là cấu trúc của 1 trang web

- ví dụ về DOM: 
   
   
    Một element sẽ bao gồm tên thẻ (tag), nội dung của thẻ và thẻ mở, thẻ đóng 

         <option value ="usa"> United State </option>
                Trong đó: 
                    <..> : thẻ mở
                    </...> : thẻ đóng
                    United State : được gọi là text và sẽ nằm giữa thẻ mở và thẻ đóng
                    value: là thuộc tính của thẻ Option
                    usa : là giá trị của thuộc tính đó


- Ngoài ra còn có thẻ tự đóng

        <img src="" alt ="" />

- Một thẻ DOM cũng có thể có nhiều thuộc tính liên tiếp

## Các thẻ  HTML thường gặp
- Thẻ < div> : dùng để chia các khối trong trang web
- Thẻ < h1></ h1>  đến < h6></ h6> : dùng để tạo ra các header phân cấp theo thứ tự từ lớn đến bé
- Thẻ < form></ form> : dùng để chứa một form thông tin
- Thẻ input : text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to
- Thẻ radio button
- Thẻ checkbox
- Thẻ list và dropdown
-Thẻ button

- Thẻ table
    - thead = talble heading
        - tr = table row = 1 dòng
            -th: table heading: text in đậm
    - tbody
        -tr -> td = table data

- Thẻ date picker
- Thẻ slider
- Thẻ iframe 

# Selector
- là cách chọn các phần tử trên trang web
- Có nhiều kiểu
    - XPath selector
    - CSS selector
    - Playwright selector

### XPath selector = XML Path
 là cách biểu diễn một phần từ theo cách của XML (là cú pháp của HTML)
- Có 2 loại
    - Tuyệt đối: đi dọc theo cây DOM
        - bắt đầu bởi 1 dấu /
    - Tương đối: tìm dựa vào đặc tính (*** nên dùng cách này ***)
        - Tương đối: bắt đầu bởi 2 dấu //
            - ví dụ: //input[@id='email'] (Nếu trong thẻ có id thì ưu tiên id trước)
        - Ngoài ra có thể kết hợp thêm nhiều thuộc tính nữa để làm tăng thêm điều kiện để truy xuất đến phần tử cần tìm thông qua ***"and"***
            - ví dụ: //input[@id='email' and @name='rating' and @type ="range"]
        - Hoặc có thể dùng ***or*** 1 trong 2 điều kiện đúng là được
            - Ví dụ: //input[@id="reading" or @id="traveling"]

# Playwright Basic syntax (Các cú pháp cơ bản)

## Test
- Đơn vị cơ bản để khai báo 1 test

    import { test, expect } from '@playwright/test';

        test('<tên test case>', async ({ page }) => {
            // Code của test
        });

        Hàm test làm để khai báo 1 test mới và có 2 tham số: 
            - Tên test
            - Nội dung test

## Step
- Một test case có thể có nhiều bước
- Đơn vị nhỏ hơn test, để khai báo từng step của test case

        await test.step('Tên step', async () => {
        // Code here
        });
        -------------------

        test('<tên test>', async ({ page }) => {
            await test.step('Tên step', async () => {
            // Code here
            });
        });

- Lưu ý: 
    - Step nên được map 1-1 với test case để dễ maintain
    - Không truyền page ở step

## Basic action
### Navigate
- Để test thì cần phải di chuyển đến trang -> thì cần dùng vào Navigate hàm goto
        
        await page.goto("link trang web cần di chuyển đến")

### Click
- Tìm đến phần tử trong playwright -> dùng hàm ***LOCATOR***
        
        await page.locator('XPath tương đối').("type of click");

#### Single click
        await page.locator("//button").click();

#### Double click
    await page.locator("//button").dblclick();

#### Click chuột phải
    page.locator("//button").click({
        button: 'right'
    })

#### Click chuột kèm bấm phím khác
    page.locator("").click({
        modifiers: ['Shift'],
    })

## Input
- Dùng hàm locator để tìm đến ví trí cần điền và dùng hàm ***FILL*** để nhập nội dung

        page.locator("XPath").fill('Nội dung');

- Gõ từng ký tự bởi hàm ***pressSequentially***

        page.locator("//input").pressSequentially('Playwright Viet Nam', {
            delay: 100,
        });

## Radio/ checkbox
- Lấy giá trị hiện tại đang là check hay không: 
    
        const isChecked = page.locator("//input").isChecked();

- Check

        page.locator("//input").check();

- Uncheck
        
        page.locator("//input").setChecked(false);
