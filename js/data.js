function check(list, item) {
    return list.includes(item);
}

if(typeof(Storage) !== 'undefined') {
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [{
        name: 'TienZona',
        password: '12345678',
        email: 'tienzona001@gmail.com',
        telephone: '0344778554',
        position: 'admin'
    }];
    localStorage.setItem("accounts", JSON.stringify(accounts));
    function addUser(data){
        const user = {
            name: data.fullname,
            password: data.password,
            email: data.email,
            telephone: data.telephone,
            position: 'user'
        }
        accounts.push(user);
        localStorage.setItem("accounts", JSON.stringify(accounts));
    }    
    
}
function checkEmail(data){
    const list =  accounts.filter(function(account){
        return  account.email === data.email;
    })

    return list.length == 0 ? false : true;
}

function checkUserName(data){
    const list =  accounts.filter(function(account){
        return account.name ===  data.fullname;
    })

    return list.length == 0 ? false : true;
}

function checkTel(data){
    const list =  accounts.filter(function(account){
        return account.telephone ===  data.telephone;
    })

    return list.length == 0 ? false : true;
}

function checkAccount(data){
    const list = accounts.filter(function(account){
        return account.name === data.fullname && account.password === data.password;
    })
    return list.length == 0 ? false : true;
}

// Sản phẩm 

if(typeof(Storage) !== 'undefined') {
    var products = JSON.parse(localStorage.getItem("products")) || [
        {
            type: 'Bắp Và Bông Cải',
            name: 'Bắp Cải Trắng Hữu Cơ',
            infor: "Bắp cải trắng: tên khoa học là Brassica oleracea var capitata ruba là cây bắp cải có màu tím. Xuất xứ từ Địa Trung Hải, hiện nay được trồng rộng rãi khắp thế giới, thích hợp với khí hậu ôn đới và tại Việt Nam bắp cải tím được trồng nhiều ở Đà Lạt.",
            cost: 80000,
            weight: '700g',
            img: '../img/BapCai_Trang.jpg'
        },
        {
            type: 'Bắp Và Bông Cải',
            name: 'Bắp Cải Trái Tim Hữu Cơ',
            infor: "Bắp trái tim: tên khoa học là Brassica oleracea var capitata ruba là cây bắp cải có màu tím. Xuất xứ từ Địa Trung Hải, hiện nay được trồng rộng rãi khắp thế giới, thích hợp với khí hậu ôn đới và tại Việt Nam bắp cải tím được trồng nhiều ở Đà Lạt.",
            cost: 40000,
            weight: '350g',
            img: '../img/BapCai_TraiTim.jpg'
        },
        {
            type: 'Bắp Và Bông Cải',
            name: 'Bắp Cải Tím Hữu Cơ',
            infor: "Bắp cải tím: tên khoa học là Brassica oleracea var capitata ruba là cây bắp cải có màu tím. Xuất xứ từ Địa Trung Hải, hiện nay được trồng rộng rãi khắp thế giới, thích hợp với khí hậu ôn đới và tại Việt Nam bắp cải tím được trồng nhiều ở Đà Lạt.",
            cost: 55000,
            weight: '500g',
            img: '../img/BapCai_Tim.jpg'
        },
        {
            type: 'Bắp Và Bông Cải',
            name: 'Bông Cải Xanh Baby Hữu Cơ',
            infor: "Bông cải xanh baby có vị ngọt, mềm ăn được cả bông và thân. Giàu các vitamin C, A, canxi, folate và sắt, tốt cho trẻ nhỏ, phụ nữ mang thai và cả gia đình. Thường dùng để: xào, trộn,...",
            cost: 42000,
            weight: '250g',
            img: '../img/BongCai_Baby.jpg'
        },
        {
            type: 'Bắp Và Bông Cải',
            name: 'Bông Cải Xanh Hữu Cơ',
            infor: "Bông cải xanh hoặc súp lơ xanh, là một loại cây thuộc họ cải, có hoa lớn ở đầu, thường được dùng như rau. Bông cải xanh thường được chế biến bằng cách luộc hoặc hấp, nhưng cũng có thể được ăn sống như là rau sống trong những đĩa đồ nguội khai vị.",
            cost: 57000,
            weight: '300g',
            img: '../img/BongCai_Xanh.jpg'
        },
        {
            type: 'Bắp Và Bông Cải',
            name: 'Bông cải trắng hữu cơ',
            infor: "Bông cải trắng có vị ngọt, mềm ăn được cả bông và thân. Giàu các vitamin C, A, canxi, folate và sắt, tốt cho trẻ nhỏ, phụ nữ mang thai và cả gia đình. Thường dùng để: xào, trộn,...",
            cost: 45000,
            weight: '250g',
            img: '../img/BongCai_Trang.jpg'
        },
        {
            type: 'Bắp Và Bông Cải',
            name: 'Cải Bẹ Xanh',
            infor: "Cải bẹ xanh có thân to, nhỏ khác nhau, lá có màu xanh đậm hoặc xanh nõn lá chuối. Lá và thân cây có vị cay, đăng đắng thường dùng phổ biến nhất là nấu canh, hay để muối dưa (dưa cải). Thời gian thu hoạch cho cải bẹ xanh trong khoảng từ 40 – 45 ngày. Thành phần dinh dưỡng trong cải bẹ xanh gồm có: vitamin A, B, C, K, axit nicotic, catoten, abumin…, nên được các chuyên gia dinh dưỡng khuyên dùng vì có nhiều lợi ích đối với sức khỏe cũng như có tác dụng phòng chống bệnh tật. Theo Đông y Việt Nam, cải bẹ xanh có vị cay, tính ôn, có tác dụng giải cảm hàn, thông đàm, lợi khí... Riêng hạt cải bẹ xanh, có vị cay, tính nhiệt, không độc, trị được các chứng phong hàn, ho đờm, hen, đau họng, tê dại, mụn nhọt.. ",
            cost: 38000,
            weight: '300g',
            img: '../img/Cai_Be_Xanh.jpg'
        },
        {
            type: 'Bắp Và Bông Cải',
            name: 'Cải Bó Xôi Hữu Cơ',
            infor: "Cải bẹ xanh có thân to, nhỏ khác nhau, lá có màu xanh đậm hoặc xanh nõn lá chuối. Lá và thân cây có vị cay, đăng đắng thường dùng phổ biến nhất là nấu canh, hay để muối dưa (dưa cải). Thời gian thu hoạch cho cải bẹ xanh trong khoảng từ 40 – 45 ngày. Thành phần dinh dưỡng trong cải bẹ xanh gồm có: vitamin A, B, C, K, axit nicotic, catoten, abumin…, nên được các chuyên gia dinh dưỡng khuyên dùng vì có nhiều lợi ích đối với sức khỏe cũng như có tác dụng phòng chống bệnh tật. Theo Đông y Việt Nam, cải bẹ xanh có vị cay, tính ôn, có tác dụng giải cảm hàn, thông đàm, lợi khí... Riêng hạt cải bẹ xanh, có vị cay, tính nhiệt, không độc, trị được các chứng phong hàn, ho đờm, hen, đau họng, tê dại, mụn nhọt.. ",
            cost: 47500,
            weight: '250g',
            img: '../img/Cai_Bo_Xoi_Huu_Co.jpg'
        },
        {
            type: 'Bầu Và Bí',
            name: 'Bầu Xanh Hữu Cơ',
            infor: "Bầu xanh hữu cơ có vị ngọt, tính lạnh, có tác dụng giải nhiệt, giải độc, lợi tiểu, chữa đái dắt, đái đường. Bầu hữu cơ được trồng theo phương pháp hữu cơ, an toàn và dinh dưỡng cho người sử dụng.",
            cost: 55000,
            weight: '500g',
            img: '../img/BauBi_Xanh.jpg'
        },
        {
            type: 'Bầu Và Bí',
            name: 'Bí Đỏ Hạt Đậu Hữu Cơ',
            infor: "Xuất xứ: Việt Nam Thành phần: Bí đỏ nguyên trái Hướng dẫn sử dụng: Dùng để nấu canh, soup, hấp, xào,... Hướng dẫn bảo quản: Bảo quản nơi khô ráo, thoáng mát Bí Hạt Đậu Hữu Cơ Danny Green có hình dáng giống hạt đậu, ít hạt, thịt màu vàng cam, vỏ mỏng mịn đặc biệt dẻo ngọt và đặc ruột chứa nhiều vitamin và khoáng chất thiết yếu cho cơ thể con người.",
            cost: 90000,
            weight: '1kg',
            img: '../img/BauBi_BiDo.jpg'
        },
        {
            type: 'Bầu Và Bí',
            name: 'Bí Ngòi Xanh Hữu Cơ',
            infor: "Bí ngòi xanh là loại trái thuộc họ bầu bí, thân tròn, dài, bên ngoài bí có màu xanh sậm, có ít vân. CÔNG DỤNG Bí ngòi nói chung giúp chữa các bệnh về hô hấp như hen suyễn, giúp tránh nhồi máu cơ tim và đột quỵ, ngăn ngừa cá bệnh về hoại huyết, thâm tím bị gây ra do thiếu hụt vitamin C. Bí ngòi còn giúp tăng khả năng ngăn ngừa chứng đa xơ cứng, ung thư ruột già, ngăn xơ vữa động mạch, làm hạ huyết áp. Một số công dụng khác như : Chống lão hóa, tăng cường trí nhớ và làm thuyên giảm những chứng bệnh liên quan đến lão hóa. Bí ngòi còn có tác dụng giảm cân vì các chất dinh dưỡng trong bí ngòi cũng có tác dụng làm tăng chuyển hóa, đồng thời loại quả này 90% là nước và có hàm lượng  calorie thấp nên giảm cân hiệu quả.",
            cost: 34500,
            weight: '300g',
            img: '../img/BauBi_BiNgoiXanhHuuCo.jpg'
        },
        {
            type: 'Củ, Quả Tươi',
            name: 'Dưa Leo Baby Hữu Cơ',
            infor: "Dưa chuột (hay dưa leo) là một loại rau ăn quả quen thuộc đối với người Việt Nam. Dưa chuột rất mát, vị giòn, ngon ngọt, thơm hấp dẫn. Dưa chuột có tác dụng thanh nhiệt, giải khát, mát da thịt, lợi tiểu, chữa phù thũng, sưng trướng, kiết lỵ do nhiệt, đau bụng do ruột bị kích thích, chống lại các bệnh ung thư và dưỡng da. Dưa chuột có hàm lượng canxi cao nên có tác dụng tốt đối với trẻ em chậm lớn. Ngoài ra, dưa chuột còn có tác dụng hỗ trợ tiêu hóa, giảm cân và giúp thận khỏe mạnh. Món ngon với dưa chuột: dưa chuột trộn chua cay, dưa chuột chấm muối ớt, dưa chuột trộn phổ tai, dưa chuột xào chả cá, tôm sú xào dưa chuột hạt điều, dưa chuột xào thịt băm, dưa chuột trộn sò điệp, salad dưa chuột…",
            cost: 24000,
            weight: '300g',
            img: '../img/CuQua_DuaLeo.jpg'
        },
        {
            type: 'Củ, Quả Tươi',
            name: 'Bắp Nếp',
            infor: "Bắp nếp là một loại ngũ cốc dễ ăn, dễ trồng được mệnh danh là Ngọc Mễ (Hạt ngọc quý) đối với người Việt xưa. Khi mà xã hội ngày càng phát triển, nhiều loại hạt và ngũ cốc được khoa học chứng minh về mức độ dinh dưỡng cùng khả năng phòng chống bệnh tật, bắp nếp cũng là một trong những loại trái cây như thế.",
            cost: 110000,
            weight: '1kg',
            img: '../img/CuQua_BapNep.jpg'
        },
        {
            type: 'Củ, Quả Tươi',
            name: 'Gừng',
            infor: "Ăn gừng thường xuyên phòng chữa sỏi mật Sử dụng gừng thường xuyên rất có lợi cho việc phòng, chữa sỏi mật. Sỏi mật hiện nay thường được điều trị bằng phẫu thuật và chưa có một thuốc đặc trị nào có hiệu quả. Nghiên cứu mới đây của các nhà khoa học Nhật Bản cho biết: Đã phát hiện thấy thành phần các chất có trong vị cay của gừng tươi như 6-Zingiberol, Ginger oil và 4 chất khác phân tách ra được, đều có tác dụng ức chế hợp thành Prostaglana – chất gây ra sỏi mật. Khi lượng prostaglandin (PG) trong cơ thể phân tiết quá nhiều, hàm lượng chất muxin (một loại protein) trong dịch mật có thể sẽ tăng lên. ",
            cost: 21900,
            weight: '100g',
            img: '../img/CuQua_Gung.jpg'
        },
        {
            type: 'Củ, Quả Tươi',
            name: 'Cà Rốt',
            infor: "Cà rốt là loại cây có củ, củ to ở phần đầu và nhọn ở phần đuôi, củ cà rốt thường có màu cam hoặc đỏ, phẩn ăn được thường gọi là củ nhưng thực chất đó là phần rễ của cà rốt. ",
            cost: 41400,
            weight: '300g',
            img: '../img/CuQua_Carot.jpg'
        },
        {
            type: 'Rau Xanh',
            name: 'Rau Diếp Cá Hữu Cơ',
            infor: "ây diếp cá có thân màu lục hoặc tím đỏ, lá mọc so le, hình tim, có bẹ, khi vò ra có mùi tanh như mùi cá. Diếp cá có vị cay chua, mùi tanh, tính mát, có tác dụng thanh nhiệt giải độc, lợi tiểu tiêu thũng, sát trùng, còn có tác dụng ức chế thần kinh và chống viêm loét.",
            cost: 26000,
            weight: '100g',
            img: '../img/Rau_DiepCa.jpg'
        },
        {
            type: 'Rau Xanh',
            name: 'Lá Bạc Hà Hữu Cơ',
            infor: "Bạc hà tây được dùng làm gia vị vì nó có mùi thơm đặc trưng. Ngoài ra bạc hà còn được điều chế làm tinh dầu... Cần để bạc hà tây trong bao kín và bảo quản trong tủ lạnh.",
            cost: 30000,
            weight: '100g',
            img: '../img/Rau_BacHa.jpg'
        },
        {
            type: 'Rau Xanh',
            name: 'Húng Quế Hữu Cơ',
            infor: "Húng quế là cây rau xanh, lá nhỏ, cành tím, có hoa màu trắng. Húng quế có các loại húng quế, húng quế ngọt, húng chanh, húng quế hồi.     CÔNG DỤNG Húng quế có lợi cho sức khỏe: Tốt cho hệ tiêu hoá, kháng khuẩn, ngăn ngừa lão hóa, lợi sữa, giảm cholesterol, giảm đường trong máu, ngăn ngừa ung thư, trị mụn trứng cá,…",
            cost: 15000,
            weight: '60g',
            img: '../img/Rau_HungHue.jpg'
        },
        {
            type: 'Rau Xanh',
            name: 'Xà Lách Romanie',
            infor: "Xà lách Romaine cây có màu xanh tươi, ăn rất giòn, có vị ngọt và thơm, hiện đang được trồng tại một số trang trại rau cao cấp ở Đà Lạt. Xà lách Romaine giàu Vitamin A, Vitamin K, Vitamin C, Magiê, chất xơ và ít protein. Xà lách Romaine có tác dụng hỗ trợ tiêu hóa và tốt cho gan, giảm nguy cơ mắc bệnh tim mạch, các cơn nhồi máu cơ tim, ung thư, nứt cột sống, thiếu máu, chứng mất ngủ do căng thẳng, hỗ trợ tiêu hóa và tốt cho gan, giảm nguy cơ mắc bệnh tim mạch, các cơn nhồi máu cơ tim, ung thư, nứt cột sống, thiếu máu, chứng mất ngủ do căng thẳng. Ngoài ra Vitamin C và Beta –Carotene kết hợp với nhau để phòng chống sự  oxy  hóa  cholesterol.. Để bảo quản được lâu, cần  rửa sạch, để ráo nước, sau đó cho vào túi nilong và lưu trữ trong tủ lạnh ở nhiệt độ 5-12°C. Cách sử dụng: Có thể làm món salad trộn hoặc ăn sống  với các món khác… Xà lách Romaine hữu cơ được trồng tại vườn hữu cơ tại Đà Lạt, Lâm Đồng. Xà lách Romaine có màu xanh tươi, ăn rất giòn, có vị ngọt và thơm.",
            cost: 58000,
            weight: '300g',
            img: '../img/RauXanh_XaLach.jpg'
        },
        {
            type: 'Ớt, Ớt Chuông',
            name: 'Ớt Hiểm Hữu Cơ',
            infor: "Ớt hiểm tại Organicfood phân phối dựa trên hoàn toàn nguồn ớt hiểm hữu cơ, nói không hóa chất độc hại, không phân bón hóa học, thuốc trừ sâu, thuốc biến đổi gen hay kích thích tăng trưởng,…không những đảm bảo tiêu chuẩn bảo vệ sực khỏe của người sử dụng mà còn giữ nguyên vị ngon, cay xé lưỡi, làm món ăn thêm hấp dẫn   ",
            cost: 19000,
            weight: '100g',
            img: '../img/Ot_OtHiem.jpg'
        },
        {
            type: 'Ớt, Ớt Chuông',
            name: 'Ớt Chuông Vàng Hữu Cơ',
            infor: "Ớt tây có 3 màu: xanh, vàng, đỏ. Nó vừa giàu chất xơ mà lại ít kalo.",
            cost: 48000,
            weight: '300g',
            img: '../img/Ot_OtChuongVang.png'
        },
        {
            type: 'Ớt, Ớt Chuông',
            name: 'Ớt Chuông Xanh Hữu Cơ',
            infor: "Ớt tây có 3 màu: xanh, vàng, đỏ. Nó vừa giàu chất xơ mà lại ít kalo.",
            cost: 48000,
            weight: '300g',
            img: '../img/Ot_Otchuongxanh.jpg'
        },
        {
            type: 'Ớt, Ớt Chuông',
            name: 'Ớt Chuông Đỏ Hữu Cơ',
            infor: "Ớt tây có 3 màu: xanh, vàng, đỏ. Nó vừa giàu chất xơ mà lại ít kalo.",
            cost: 48000,
            weight: '300g',
            img: '../img/Ot_OtChuongDo.jpg'
        },

        {
            type: 'Nấm Tươi',
            name: 'Nấm Kim Châm Hàn Quốc',
            infor: "Nấm kim châm là một loài nấm màu trắng được sử dụng trong ẩm thực các nước châu Á như Hàn Quốc, Nhật Bản, Triều Tiên. Loại nấm này theo truyền thống được sử dụng nấu món lẩu, nhưng cũng có thể được sử dụng cho món salad và các món ăn khác.",
            cost: 26000,
            weight: 'Bó',
            img: '../img/Nam_KimCham.jpg'
        },
        {
            type: 'Nấm Tươi',
            name: 'Nấm Đùi Gà Hàn Quốc',
            infor: "Cách bảo quản: cắt bỏ phần chân nấm, nhúng qua nước sôi từ 1 - 2 phút, sau đó rửa lại bằng nước lạnh, để ráo nước rồi cho vào hộp kín rồi bỏ vào tủ lạnh, với cách này có thể bảo quản được nấm từ 3 - 4 ngày. ",
            cost: 78000,
            weight: '250g',
            img: '../img/Nam_DuoiGa.jpg'
        },
        {
            type: 'Nấm Tươi',
            name: 'Nấm Đùi Gà Baby Hàn Quốc',
            infor: "Cách bảo quản: cắt bỏ phần chân nấm, nhúng qua nước sôi từ 1 - 2 phút, sau đó rửa lại bằng nước lạnh, để ráo nước rồi cho vào hộp kín rồi bỏ vào tủ lạnh, với cách này có thể bảo quản được nấm từ 3 - 4 ngày. ",
            cost: 49000,
            weight: '200g',
            img: '../img/Nam_Baby.jpg'
        },
        {
            type: 'Nấm Tươi',
            name: 'Nấm Đông Cô Hàn Quốc',
            infor: "Nấm đông cô hay còn gọi là nấm hương là một loại nấm ăn có nguồn gốc bản địa ở Đông Á. Nấm đông cô có dạng như cái ô, đường kính 4–10 cm, màu nâu nhạt, khi chín chuyển thành nâu sậm. Nấm đông cô có một chân đính vào giữa tai nấm. Mặt trên tai nấm màu nâu, mặt dưới có nhiều bản mỏng xếp lại.Trên mặt nấm có những vảy nhỏ màu trắng. Thịt nấm màu trắng, cuống hình trụ. ",
            cost: 100000,
            weight: '300g',
            img: '../img/Nam_DongCo.jpg'
        },
        {
            type: 'Khoai',
            name: 'Khoai Tây Hữu Cơ',
            infor: "Khoai Tây có ruột màu vàng, thân gồ ghề, củ hơi tròn, vị ngọt, dẻo/ bùi. Khoai Tây không những là một loại thực phẩm bổ dưỡng mà nó còn có tác dụng chữa bệnh khiến bạn ngạc nhiên. ",
            cost: 70000,
            weight: '1kg',
            img: '../img/Khoai_Tay.jpg'
        },
        {
            type: 'Khoai',
            name: 'Khoai Tây Hồng Organic 300g',
            infor: "Không chỉ có màu sắc và mùi vị đặc trưng, khoai tây hồng còn là một loại thực phẩm dinh dưỡng có rất nhiều tác dụng chữa bệnh. Nguyên nhân là vì trong khoai tây hồng có chứa rất nhiều chất dinh dưỡng có thể kể đến như: tinh bột, Vitamin C, Vitamin B6, BI, B2, Kali, Phốt pho, chất xơ, chất chống oxy hóa,… những chất này đã góp phần tạo nên hương vị cũng như công dụng của khoai lang hồng. ",
            cost: 40500,
            weight: '300g',
            img: '../img/khoai_khoaitayhongorganic300g.png'
        },
        {
            type: 'Khoai',
            name: 'Khoai Môn Hữu Cơ 500g',
            infor: "Khoai môn là loại củ quen thuộc trong ẩm thực Việt, nấu được cả món mặn và ngọt: chè khoai môn, canh khoai môn, bánh ngọt... ",
            cost: 42500,
            weight: '500g',
            img: '../img/khoai_khoaimonhuuco500g.jpg'
        },
        {
            type: 'Khoai',
            name: 'Khoai Lang Nhật Hữu Cơ 500g',
            infor: "Khoai môn là loại củ quen thuộc trong ẩm thực Việt, nấu được cả món mặn và ngọt: chè khoai môn, canh khoai môn, bánh ngọt... ",
            cost: 39000,
            weight: '500g',
            img: '../img/khoai_khoailangnhathuuco500g.jpg'
        },
        

        
    ];
    localStorage.setItem("products", JSON.stringify(products));
    
    function addProduct(item){
        products = JSON.parse(localStorage.getItem("products"));
        products.push(item);
        localStorage.setItem("products", JSON.stringify(products));
    }
    function removeProduct(index){
        products = JSON.parse(localStorage.getItem("products"));
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
    }
}

// localStorage.clear()


function getCost(name){
    var item = products.filter(function(item){
        return item.name === name;
    })
    return item[0].cost;
}

function getProduct(name){
    const item = products.filter(function(product){
        return product.name === name;
    })
    return item[0];
}


// Vỏ hàng
if(typeof(Storage) !== 'undefined') {
    var carts = JSON.parse(localStorage.getItem("carts")) || [];
    localStorage.setItem("carts", JSON.stringify(carts));
    function addCart(data){
        const item = {
            name: data.name,
            img: data.img,
            cost: data.cost,
            weight: data.weight
        }
        const result = carts.filter(function(item){
            return item.name === data.name;
        })
        if(result.length == 0)
            carts.push(item);
        localStorage.setItem("carts", JSON.stringify(carts));
    }    
    function removeItem(name){
        carts = carts.filter(function(item){
            return item.name != name;
        });
        localStorage.setItem("carts", JSON.stringify(carts));
    }
}

// Đăng nhập
if(typeof(Storage) !== 'undefined'){
    function setUser(user){
        localStorage.setItem('user', JSON.stringify(user));
    }

    function getuser(){
        return localStorage.getItem('user');
    }
}
