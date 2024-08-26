# VERSION CONTROL SYSTEM (hệ thống quản lý phiên bản)
## Có 3 loại VCS: 
    - Local: Lưu ở máy cá nhân
    - Centralize: Lưu ở một máy chủ tập trung
    - Distributed: lưu ở nhiều máy khác nhau

# GIT
## Có 3 vùng trạng thái (Git status)
![Hình ảnh](image.png)
## Key takeaways
### Câu lệnh thường dùng
    1. Khởi tạo thư mục được quản lý bởi Git
        ● git init
    
    2. Cấu hình
        ● Cho 1 repo:
            ○ git config user.name “<name>”
            ○ git config user.email “<email>”
        ● Cho toàn bộ máy tính:
            ○ git config --global user.name “user”
            ○ git config --global user.email “email”
    
    3. Thêm file vào cùng staging
        ● Thêm 1 file: git add <file_name>
        ● Thêm toàn bộ: git add .
    
    4. Xem trạng thái
        ● Xem trạng thái file: git status
            ○ File màu xanh: vùng staging
            ○ File màu đỏ: vùng working directory

    5. Commit
        ● Commit: git commit -m ”message”
        ● Kiểm tra lịch sử commit: git log

## Git - simple workflow
![Hình ảnh ](image-1.png)

## Git - commit convention
- Convention = quy tắc => dùng để giúp cả team làm việc với nhau theo 1 quy tắc và cũng như giúp Code trở nên gọn gàng và sạch đẹp hơn.

- Commit message phải rõ ràng, chuyên nghiệp. Trong lớp, dùng convension sau: 

                    <type>: <short_description>
        
        ● Trong đó:
            
            ○ type: loại commit
                ■ chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
                ■ feat: thêm tính năng mới, test case mới
                ■ fix: sửa lỗi 1 test trước đó
            
            ○ short_description: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.

# JAVASCRIPT BASIC
## Hello world
    Chạy lệnh để in ra Hello World
        * Dùng lệnh: node <file.js>

## Variable, constant, data types
Variable = biến, dùng để lưu giữ giá trị, có thể thay đổi giá trị được.
    
    ● Khai báo:
        ○ var <ten_bien> = <gia tri>;
        ○ let <ten_bien> = <gia tri>;
    
    ○ Trong đó: <ten_bien>
        ■ Bắt đầu bằng ký tự chữ, hoặc gạch dưới, hoặc $
        ■ KHÔNG chứa dấu cách
        ■ KHÔNG là các "từ khóa", tức là các từ đã có trong Javascript (ví dụ: var, let, for, if,...)

Sự khác nhau giữa Var và Let
    
    ● var khai báo lại được, let thì không
        ○ var item1 = ‘a’;
        ○ var item1 = ‘c’; // OK

        ○ let item2 = ‘b’;
        ○ let item2 = ‘d’; // error
    
    ● Phạm vi của biến
        ○ var: phạm vi toàn cục (global)
        ○ let: phạm vi trong cặp ngoặc {}
    
    ● Nên dùng: let, vì dễ kiểm soát phạm vi của biến

Constant = hằng số. Dùng để khai báo các giá trị
không thể thay đổi.

    ● Khai báo
        ○ const <name> = <value>
    
Data types

    Ba kiểu dữ liệu chính: String, Number, Boolean.

## Comparison operator:
Toán tử so sánh dùng để so sánh giá trị giữa 2 biến với nhau. Kết quả sẽ trả về Boolean (T or F)

Các toán tử so sánh: <, >, ==, ===, !=, !==, <=, >=.

## Unary operator
 Toán tử 1 ngôi dùng để tăng hoặc giám giá trị
    
    ● i++ bằng với i=i+1
    ● i-- bằng với i=i-1

## Arithmetic operator

Toán tử số học dùng để tính toán giá trị biểu thức

    Các phép toán: +, -, *, /

## Conditional
Câu điều kiện dùng để ktra có nên thực hiện một đoạn logic không.

    Cú pháp: 
        if (<điều kiện>) { // code }. Nếu điều kiện đúng, sẽ chạy đoạn code

## Loop
Vòng lặp dùng để thực hiện một đoạn logic một số lần nhất định

    Cú pháp: 
        for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {// code }



