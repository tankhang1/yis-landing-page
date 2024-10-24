document.addEventListener("DOMContentLoaded", function () {
  // Store translations and corresponding flags
  const translations = {
    en: {
      icon: "https://cdn.britannica.com/76/4476-050-E643DD49/Betsy-Ross-legend-flag-united-states.jpg",
      text: {
        toptab_home: "Home",
        toptab_pages: "Pages",
        toptab_shop: "Shop",
        toptab_services: "Services",
        toptab_news: "News",
        toptab_contact: "Contact",
        subtab_qrcode_management: "QrCode Management",
        subtab_campain_management: "Campaign Management",
        subtab_event_management: "Event Management",
        subtab_consultant_management: "Consultant Management",
        subtab_warehouse_management: "Warehouse Management",
        subtab_bizcard_management: "BizCard Management",
        contact_us: "Contact Us",
        about_us: "About Us",
        see_about_us: "See About Us",
        outstanding: "Outstanding",
        home_page_title: "Technology Leading to Lasting Success",
        home_page_desc:
          "Yis Martech is honored to introduce a young, dynamic, and enthusiastic team of staff members.",
        get_start: "Get Start",
        services_desc:
          "Comprehensive Solutions for Manufacturing and Distribution Businesses",
        service_1: "QR Code Management System",
        service_1_desc:
          "We provide best Software Service for any type of business as stragegy, management.",
        service_2: "Campaign Management with QR",
        service_2_desc:
          " We provide best Software Service for any type of business as stragegy, management.",
        service_3: "Event Management Solutions",
        service_3_desc: `We provide event management and communication solutions
                      through a marketing platform based on data analysis,
                      helping to optimize the event experience and increase
                      communication effectiveness.`,
        service_4: "IConsultant Services",
        service_4_desc: `We empower businesses to leverage cutting-edge
                      technologies to accelerate growth, streamline operations,
                      and enhance customer experiences.`,
        service_5: "IWarehouse Services",
        service_5_desc: `Yis. warehouse management solution focuses on automating
                      warehouse operations that include distribution, inventory
                      tracking, and keeping costs & errors to a minimum.`,
        service_6: "IBizCard Services",
        service_6_desc: ` Create custom IBizCard with your customised branding.
                      Build a dynamic template for each team member specific to
                      your company's needs. Have them direct prospects to key
                      information you want them to share with a tap of their
                      cards Direct potential customers to a specific landing
                      page, product video, menu, pricelist.... the possibilities
                      are endless!`,
        about_us_title: `Yis MarTech - Pioneering Marketing Technology, Leading Success`,
        about_us_desc: ` Yis MarTech, Your Service, offers a wide range of marketing
                  technologies to help achieve marketing objectives or goals.
                  Yis MarTech has become a vital component in digital marketing
                  campaigns, but it can also be utilized to optimize marketing
                  efforts across any channel.`,
        outstanding_title: "Typical solutions",
        outstanding_title_1: "QR Code Loyalty & Sell-out",
        outstanding_title_1_desc: `Implement promotions, win prizes, and accumulate points
                      right on the product, applicable to both consumers and
                      distribution channels (sell-out).`,
        outstanding_title_2: "QR Code Anti-counterfeit",
        outstanding_title_2_desc: `See your authentic mission, and values come to life with a
                      unique brand image.`,
        outstanding_title_3: "QR Code Traceability",
        outstanding_title_3_desc: `Solution for businesses and cooperatives to trace product
                      origins according to national standards.`,
        outstanding_title_4: "QR Code Traceability",
        outstanding_title_4_desc: `Solution for businesses and cooperatives to trace product
                                    origins according to national standards.`,
        vision: "Vision",
        vision_desc: `We aim to become a trusted partner for our customers,
                    delivering optimal solutions with the guiding principles of
                    "DEDICATION - CREATIVITY - EFFICIENCY." With a commitment
                    that extends beyond words to actions, we focus on innovation
                    and creating genuine value, building sustainable and
                    long-term success together with our customers.`,
        mission: "Mission",
        mission_desc: `Yis MarTech is an innovative marketing company that delivers
                    complete and cost-effective solutions to clients. We bring a
                    world of strategic, technical, design and implementation
                    expertise to our customers, increasing the effectiveness of
                    their marketing initiatives and helping them meet the
                    challenges of todays’ constantly changing environment.`,
        project_done: "Project Done",
        success_rate: "Success Rate",
        winning_awards: "Winning Awards",
        happy_client: "Happy Client",
        get_in_touch: "Get In Touch",
        follow_us: "Follow Us",
        information: "Information",
        team: "Team",
        blog: "Blog",
        error_404: "Error 404",
        faq: "Faq",
        privacy_policy: "Privacy Policy",
        terms: "Terms",
        subscribe: "Subscribe Our Newsletter",
        subscribe_us:
          "Get started for 1 Month free trial No Purchace required.",
        work_process: "Work Process",
        work_process_desc: "Efficiency in Motion, Progress in Every Step",
        step1: "Step 1",
        step1_title: "Receive Request",
        step1_desc_1: "Limit fake goods on the market",
        step1_desc_2: "Increase brand recognition",
        step1_desc_3: "Limit fake goods on the market",
        step1_desc_4: "Activate warranty",

        step2: "Step 2",
        step2_title: "Finalize Requirements",
        step2_desc_1: "Provide time and cost estimates for implementation",
        step2_desc_2:
          "Sign contracts and ensure information security agreements",
        step3: "Step 3",
        step3_title: "Build Solution",
        step3_desc_1: "Design the system",
        step3_desc_2: "Develop system features",
        step3_desc_3: "Test system features",
        step4: "Step 4",
        step4_title: "Deploy",
        step4_desc_1: "Deploy the system into real operation",
        step4_desc_2: "Train on the operational procedures",
        step5: "Step 5",
        step5_title: "Acceptance Testing",
        step5_desc_1: "Ensure the system operates correctly and stably",
        step5_desc_2: "Ensure the personnel operate the system correctly",
        step5_desc_3: "Sign the acceptance test report",
        qr_code_solutions: "QrCode Solutions",
        qr_code_solutions_desc: `QrCode Solutions Yis Martech's QR code solution includes
                  Warranty, Anti-counterfeiting, Traceability, and Marketing,
                  catering to various production models and product distribution
                  management systems. Businesses can manage, generate QR codes,
                  print labels, and control product quality on their own. All
                  functions are integrated into a single system, simplifying
                  management and enhancing overall efficiency.`,
        qr_code_traceability_and_anti_counterfeiting:
          "QrCode for Traceability and anti-counterfeiting",
        qr_code_traceability_and_anti_counterfeiting_desc_1:
          "Limit fake goods on the market",
        qr_code_traceability_and_anti_counterfeiting_desc_2:
          "Increase brand recognition",
        qr_code_traceability_and_anti_counterfeiting_desc_3:
          "Activate warranty",
        qr_code_for_distribution: "QrCode for Distribution System Management",
        qr_code_for_distribution_desc_1: "Real-time inventory report",
        qr_code_for_distribution_desc_2:
          "Warehouse management, inventory in and out on the phone",
        qr_code_for_distribution_desc_3:
          "Manage inventory by distribution area",
        qr_code_for_distribution_desc_4: "Distributor management",
        qr_code_for_loyalty: "QrCode for Loyalty Customer",
        qr_code_for_loyalty_desc_1: "Track Product Movement",
        qr_code_for_loyalty_desc_2: "Ensure Product Quality Control",
        qr_code_for_loyalty_desc_3: "Increase Transparency in the Supply Chain",
        qr_code_for_marketing: "QrCode for Marketing",
        qr_code_for_marketing_desc_1: "Integrate Product Information",
        qr_code_for_marketing_desc_2: "Measure Marketing Effectiveness",
        qr_code_for_marketing_desc_3: "Personalized Content Delivery",
        qr_code_for_warranty: "QrCode for Convenient Electronic Warranty",
        qr_code_for_warranty_desc_1: "Effortless Warranty Management",
        qr_code_for_warranty_desc_2: "Minimize Traditional Warranty Processes",
        qr_code_for_warranty_desc_3: "Enhance After-sales Service",
        qr_code_for_warranty_desc_4: "Activate warranty",
        why_you_should_choose_yis: "Why You Should Choose Yis Solutions?",
        why_you_should_choose_yis_title: `At Yis, we understand the importance of efficiency,
                        security, and innovation in your business operations.
                        Our solutions, powered by cutting-edge technology, offer
                        a range of benefits that make us the right partner for
                        your business. Here's why you should choose Yis:`,
        why_you_should_choose_yis_desc_1: "Comprehensive QrCode Solutions",
        why_you_should_choose_yis_desc_2: "Tailored for Every Industry",
        why_you_should_choose_yis_desc_3:
          "Boost Customer Loyalty and Engagement",
        why_you_should_choose_yis_desc_4: "Seamless Integration",
        how_can_you_connect_with_yis: "How Can You Connect With Yis?",
        how_can_you_connect_with_yis_title: `Connecting with Yis is simple, and we’re always ready
                          to assist you in implementing our solutions. Here's
                          how you can reach us:`,
        how_can_you_connect_with_yis_desc_1: "Visit Our Website",
        how_can_you_connect_with_yis_desc_2: "Schedule a Consultation",
        how_can_you_connect_with_yis_desc_3: "Email Us",
        how_can_you_connect_with_yis_desc_4: "Follow Us on Social Media",
        prioritizing_the_customer: "Prioritizing the Customer’s Needs",
        prioritizing_the_customer_title: `At Yis, our customers are at the heart of everything
                          we do. We understand that every business is unique,
                          and we strive to provide customized solutions that
                          address your specific challenges. Here's how we
                          prioritize customer needs:`,
        prioritizing_the_customer_desc_1: "Tailored Solutions",
        prioritizing_the_customer_desc_2: "Exceptional Customer Support",
        prioritizing_the_customer_desc_3: "Ongoing Innovation",
        prioritizing_the_customer_desc_4: "Efficient and Secure Technology",
        prioritizing_the_customer_desc_5: "Focus on Long-Term Relationships",
        contact_us_for_help: "Contact us for help",
        contact_us_for_help_desc:
          "Get in touch and let us know how we can help touch as soon as possible.",
      },
    },
    vi: {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png",
      text: {
        toptab_home: "Trang Chủ",
        toptab_pages: "Trang",
        toptab_shop: "Cửa Hàng",
        toptab_services: "Dịch Vụ",
        toptab_news: "Tin Tức",
        toptab_contact: "Liên Hệ",
        subtab_qrcode_management: "Quản Lý QR Code",
        subtab_campain_management: "Quản Lý Chiến Dịch",
        subtab_event_management: "Quản Lý Sự Kiện",
        subtab_consultant_management: "Quản Lý Tư Vấn",
        subtab_warehouse_management: "Quản Lý Kho Hàng",
        subtab_bizcard_management: "Quản Lý BizCard",
        contact_us: "Liên Hệ Chúng Tôi",
        about_us: "Về Chúng Tôi",
        see_about_us: "Xem Về Chúng Tôi",
        outstanding: "Nổi Bật",
        home_page_title: "Công Nghệ Dẫn Đến Thành Công Bền Vững",
        home_page_desc:
          "Yis Martech hân hạnh giới thiệu đội ngũ nhân viên trẻ trung, năng động và nhiệt huyết.",
        get_start: "Bắt Đầu",
        services_desc:
          "Giải Pháp Toàn Diện Cho Doanh Nghiệp Sản Xuất và Phân Phối",
        service_1: "Hệ Thống Quản Lý QR Code",
        service_1_desc:
          "Chúng tôi cung cấp dịch vụ phần mềm tốt nhất cho mọi loại hình kinh doanh về chiến lược, quản lý.",
        service_2: "Quản Lý Chiến Dịch Bằng QR",
        service_2_desc:
          "Chúng tôi cung cấp dịch vụ phần mềm tốt nhất cho mọi loại hình kinh doanh về chiến lược, quản lý.",
        service_3: "Giải Pháp Quản Lý Sự Kiện",
        service_3_desc:
          "Chúng tôi cung cấp các giải pháp quản lý sự kiện và truyền thông thông qua nền tảng tiếp thị dựa trên phân tích dữ liệu, giúp tối ưu hóa trải nghiệm sự kiện và tăng cường hiệu quả truyền thông.",
        service_4: "Dịch Vụ IConsultant",
        service_4_desc:
          "Chúng tôi giúp doanh nghiệp tận dụng công nghệ tiên tiến để thúc đẩy tăng trưởng, tối ưu hóa hoạt động và cải thiện trải nghiệm khách hàng.",
        service_5: "Dịch Vụ IWarehouse",
        service_5_desc:
          "Giải pháp quản lý kho của Yis tập trung vào việc tự động hóa các hoạt động kho, bao gồm phân phối, theo dõi hàng tồn kho, và giảm thiểu chi phí và sai sót.",
        service_6: "Dịch Vụ IBizCard",
        service_6_desc:
          "Tạo BizCard tùy chỉnh với thương hiệu riêng của bạn. Xây dựng mẫu động cho từng thành viên trong đội, phù hợp với nhu cầu cụ thể của công ty bạn. Hướng dẫn khách hàng tiềm năng đến thông tin bạn muốn chia sẻ chỉ với một cú chạm, chẳng hạn như trang đích, video sản phẩm, thực đơn, bảng giá... khả năng là vô tận!",
        about_us_title:
          "Yis MarTech - Tiên Phong Công Nghệ Tiếp Thị, Dẫn Đầu Thành Công",
        about_us_desc:
          "Yis MarTech cung cấp nhiều công nghệ tiếp thị để giúp đạt được các mục tiêu tiếp thị. Yis MarTech đã trở thành một thành phần quan trọng trong các chiến dịch tiếp thị số và có thể tối ưu hóa nỗ lực tiếp thị trên mọi kênh.",
        outstanding_title: "Giải Pháp Tiêu Biểu",
        outstanding_title_1: "QR Code Loyalty & Sell-out",
        outstanding_title_1_desc:
          "Thực hiện khuyến mãi, trúng thưởng và tích điểm ngay trên sản phẩm, áp dụng cho cả người tiêu dùng và kênh phân phối (sell-out).",
        outstanding_title_2: "QR Code Chống Hàng Giả",
        outstanding_title_2_desc:
          "Mang sứ mệnh và giá trị của bạn đến với khách hàng với hình ảnh thương hiệu độc đáo.",
        outstanding_title_3: "QR Code Truy Xuất Nguồn Gốc",
        outstanding_title_3_desc:
          "Giải pháp cho doanh nghiệp và hợp tác xã truy xuất nguồn gốc sản phẩm theo tiêu chuẩn quốc gia.",
        outstanding_title_4: "QR Code Truy Xuất Nguồn Gốc",
        outstanding_title_4_desc:
          "Giải pháp cho doanh nghiệp và hợp tác xã truy xuất nguồn gốc sản phẩm theo tiêu chuẩn quốc gia.",
        vision: "Tầm Nhìn",
        vision_desc:
          "Chúng tôi hướng tới trở thành đối tác tin cậy cho khách hàng, cung cấp các giải pháp tối ưu với nguyên tắc chỉ đạo 'TẬN TÂM - SÁNG TẠO - HIỆU QUẢ.' Với cam kết đổi mới và tạo ra giá trị thực, chúng tôi tập trung vào xây dựng thành công bền vững và lâu dài cùng với khách hàng.",
        mission: "Sứ Mệnh",
        mission_desc:
          "Yis MarTech là công ty tiếp thị sáng tạo, cung cấp các giải pháp hoàn chỉnh và chi phí hiệu quả cho khách hàng. Chúng tôi mang đến cho khách hàng sự chuyên môn về chiến lược, kỹ thuật, thiết kế và triển khai, tăng cường hiệu quả của các sáng kiến tiếp thị và giúp họ đối phó với những thách thức của môi trường không ngừng thay đổi.",
        project_done: "Dự Án Hoàn Thành",
        success_rate: "Tỷ Lệ Thành Công",
        winning_awards: "Giải Thưởng Đạt Được",
        happy_client: "Khách Hàng Hài Lòng",
        get_in_touch: "Liên Hệ",
        follow_us: "Theo Dõi Chúng Tôi",
        information: "Thông Tin",
        team: "Đội Ngũ",
        blog: "Blog",
        error_404: "Lỗi 404",
        faq: "Câu Hỏi Thường Gặp",
        privacy_policy: "Chính Sách Bảo Mật",
        terms: "Điều Khoản",
        subscribe: "Đăng Ký Nhận Bản Tin",
        subscribe_us:
          "Bắt đầu với bản dùng thử miễn phí 1 tháng. Không yêu cầu mua hàng.",
        work_process: "Quy Trình Làm Việc",
        work_process_desc: "Hiệu Quả Trong Mỗi Bước Tiến",
        step1: "Bước 1",
        step1_title: "Nhận Yêu Cầu",
        step1_desc_1: "Giảm thiểu hàng giả trên thị trường",
        step1_desc_2: "Tăng cường nhận diện thương hiệu",
        step1_desc_3: "Giảm thiểu hàng giả trên thị trường",
        step1_desc_4: "Kích hoạt bảo hành",
        step2: "Bước 2",
        step2_title: "Hoàn Thiện Yêu Cầu",
        step2_desc_1:
          "Cung cấp thời gian và chi phí ước tính cho việc triển khai",
        step2_desc_2: "Ký hợp đồng và đảm bảo các thỏa thuận bảo mật thông tin",
        step3: "Bước 3",
        step3_title: "Xây Dựng Giải Pháp",
        step3_desc_1: "Thiết kế hệ thống",
        step3_desc_2: "Phát triển các tính năng hệ thống",
        step3_desc_3: "Kiểm thử các tính năng hệ thống",
        step4: "Bước 4",
        step4_title: "Triển Khai",
        step4_desc_1: "Triển khai hệ thống vào vận hành thực tế",
        step4_desc_2: "Đào tạo quy trình vận hành",
        step5: "Bước 5",
        step5_title: "Kiểm Tra Nghiệm Thu",
        step5_desc_1: "Đảm bảo hệ thống vận hành đúng và ổn định",
        step5_desc_2: "Đảm bảo nhân sự vận hành hệ thống chính xác",
        step5_desc_3: "Ký biên bản nghiệm thu",
        qr_code_solutions: "Giải pháp Mã QR",
        qr_code_solutions_desc: `Giải pháp mã QR của Yis Martech bao gồm Bảo hành, Chống hàng giả, Truy xuất nguồn gốc và Tiếp thị, phục vụ cho các mô hình sản xuất khác nhau và hệ thống quản lý phân phối sản phẩm. Các doanh nghiệp có thể tự quản lý, tạo mã QR, in nhãn và kiểm soát chất lượng sản phẩm. Tất cả các chức năng đều được tích hợp vào một hệ thống duy nhất, đơn giản hóa việc quản lý và tăng cường hiệu quả tổng thể.`,
        qr_code_traceability_and_anti_counterfeiting:
          "Mã QR cho Truy xuất nguồn gốc và chống hàng giả",
        qr_code_traceability_and_anti_counterfeiting_desc_1:
          "Hạn chế hàng giả trên thị trường",
        qr_code_traceability_and_anti_counterfeiting_desc_2:
          "Tăng cường nhận diện thương hiệu",
        qr_code_traceability_and_anti_counterfeiting_desc_3:
          "Kích hoạt bảo hành",
        qr_code_for_distribution: "Mã QR cho Quản lý Hệ thống Phân phối",
        qr_code_for_distribution_desc_1: "Báo cáo tồn kho theo thời gian thực",
        qr_code_for_distribution_desc_2:
          "Quản lý kho, xuất nhập tồn kho trên điện thoại",
        qr_code_for_distribution_desc_3:
          "Quản lý tồn kho theo khu vực phân phối",
        qr_code_for_distribution_desc_4: "Quản lý nhà phân phối",
        qr_code_for_loyalty: "Mã QR cho Khách hàng Trung thành",
        qr_code_for_loyalty_desc_1: "Theo dõi Di chuyển Sản phẩm",
        qr_code_for_loyalty_desc_2: "Đảm bảo Kiểm soát Chất lượng Sản phẩm",
        qr_code_for_loyalty_desc_3: "Tăng cường Minh bạch trong Chuỗi Cung Ứng",
        qr_code_for_marketing: "Mã QR cho Tiếp thị",
        qr_code_for_marketing_desc_1: "Tích hợp Thông tin Sản phẩm",
        qr_code_for_marketing_desc_2: "Đo lường Hiệu quả Tiếp thị",
        qr_code_for_marketing_desc_3: "Cung cấp Nội dung Cá nhân hóa",
        qr_code_for_warranty: "Mã QR cho Bảo hành Điện tử Tiện lợi",
        qr_code_for_warranty_desc_1: "Quản lý Bảo hành Dễ dàng",
        qr_code_for_warranty_desc_2:
          "Giảm thiểu Quy trình Bảo hành Truyền thống",
        qr_code_for_warranty_desc_3: "Nâng cao Dịch vụ Sau Bán Hàng",
        qr_code_for_warranty_desc_4: "Kích hoạt bảo hành",
        why_you_should_choose_yis: "Tại sao Bạn Nên Chọn Giải pháp của Yis?",
        why_you_should_choose_yis_title: `Tại Yis, chúng tôi hiểu tầm quan trọng của hiệu quả, an ninh và sự đổi mới trong hoạt động kinh doanh của bạn. Các giải pháp của chúng tôi, được trang bị công nghệ tiên tiến, cung cấp một loạt lợi ích giúp chúng tôi trở thành đối tác phù hợp cho doanh nghiệp của bạn. Đây là lý do tại sao bạn nên chọn Yis:`,
        why_you_should_choose_yis_desc_1: "Giải pháp Mã QR Toàn diện",
        why_you_should_choose_yis_desc_2: "Tùy chỉnh cho Mọi Ngành",
        why_you_should_choose_yis_desc_3:
          "Tăng cường Lòng Trung Thành và Sự Gắn Kết của Khách hàng",
        why_you_should_choose_yis_desc_4: "Tích hợp Liền mạch",
        how_can_you_connect_with_yis: "Làm Thế Nào Bạn Có Thể Kết Nối với Yis?",
        how_can_you_connect_with_yis_title: `Kết nối với Yis rất đơn giản, và chúng tôi luôn sẵn sàng hỗ trợ bạn trong việc triển khai các giải pháp của chúng tôi. Dưới đây là cách bạn có thể liên hệ với chúng tôi:`,
        how_can_you_connect_with_yis_desc_1: "Truy cập Trang Web của Chúng tôi",
        how_can_you_connect_with_yis_desc_2: "Đặt Lịch Tư Vấn",
        how_can_you_connect_with_yis_desc_3: "Gửi Email cho Chúng tôi",
        how_can_you_connect_with_yis_desc_4:
          "Theo dõi Chúng tôi trên Mạng Xã hội",
        prioritizing_the_customer: "Ưu Tiên Nhu Cầu của Khách Hàng",
        prioritizing_the_customer_title: `Tại Yis, khách hàng là trọng tâm của mọi hoạt động mà chúng tôi thực hiện. Chúng tôi hiểu rằng mỗi doanh nghiệp đều có những đặc thù riêng, và chúng tôi nỗ lực cung cấp các giải pháp tùy chỉnh nhằm giải quyết các thách thức cụ thể của bạn. Dưới đây là cách chúng tôi ưu tiên nhu cầu của khách hàng:`,
        prioritizing_the_customer_desc_1: "Giải pháp Tùy chỉnh",
        prioritizing_the_customer_desc_2: "Hỗ trợ Khách hàng Xuất sắc",
        prioritizing_the_customer_desc_3: "Sự Đổi mới Liên tục",
        prioritizing_the_customer_desc_4: "Công nghệ Hiệu quả và An toàn",
        prioritizing_the_customer_desc_5: "Tập trung vào Quan hệ Dài hạn",
        contact_us_for_help: "Liên hệ với chúng tôi để được hỗ trợ",
        contact_us_for_help_desc:
          "Hãy liên hệ và cho chúng tôi biết cách chúng tôi có thể giúp bạn sớm nhất có thể.",
      },
    },
  };

  // Function to update language and flag
  function updateLanguage(language) {
    const langData = translations[language];
    document.getElementById("current-language-icon").src = langData.icon;
    Object.keys(translations.en.text).map((key) => {
      console.log(key);
      if (document.getElementById(key))
        document.getElementById(key).innerText = langData.text[key];
    });
  }

  // Handle language change on click
  document
    .getElementById("language-english")
    .addEventListener("click", function () {
      updateLanguage("en");
    });

  document
    .getElementById("language-vietnamese")
    .addEventListener("click", function () {
      updateLanguage("vi");
    });
});
