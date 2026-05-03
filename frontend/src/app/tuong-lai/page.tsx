"use client";
import React from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

import { 
  TrendingUp, 
  Cpu, 
  Users, 
  Target, 
  Globe, 
  Zap, 
  Box, 
  Star, 
  UserPlus, 
  ShieldCheck, 
  Flag,
  ArrowRight
} from "lucide-react";

const WavyBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.15] z-0">
    <svg 
      className="absolute w-full h-full" 
      viewBox="0 0 1440 1000" 
      preserveAspectRatio="none"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(25)].map((_, i) => (
        <path 
          key={i}
          d={`M-100 ${50 + i * 40}C${200 + (i % 2) * 100} ${i * 40} ${400 + (i % 3) * 100} ${100 + i * 40} ${720} ${50 + i * 40}C${1040} ${i * 40} ${1240} ${100 + i * 40} 1540 ${50 + i * 40}`} 
          stroke="white" 
          strokeWidth="1" 
        />
      ))}
    </svg>
  </div>
);

const strategicPillars = [
  {
    id: "01",
    title: "TĂNG TRƯỞNG KINH DOANH",
    content: "Mở rộng quy mô, gia tăng doanh thu và giữ vững hiệu quả lợi nhuận.",
    color: "#EE0033",
    icon: <TrendingUp size={32} />
  },
  {
    id: "02",
    title: "CÔNG NGHỆ & BÁN LẺ MỚI",
    content: "Dẫn đầu ứng dụng AI, Big Data và phát triển hệ sinh thái đa dịch vụ.",
    color: "#EE0033",
    icon: <Cpu size={32} />
  },
  {
    id: "03",
    title: "TỔ CHỨC VỮNG MẠNH",
    content: "Xây dựng bộ máy tinh gọn, nhân sự chuyên nghiệp và Đảng bộ trong sạch.",
    color: "#EE0033",
    icon: <Users size={32} />
  }
];

const focusGoals = [
  {
    id: "01",
    title: "MỤC TIÊU TỔNG THỂ",
    icon: <Target className="text-[#EE0033]" size={24} />,
    items: [
      "Top 3 chuỗi bán lẻ lớn nhất Việt Nam",
      "Số 1 về ứng dụng công nghệ",
      "Phát triển thêm ít nhất 01 chuỗi bán lẻ mới độc lập"
    ]
  },
  {
    id: "02",
    title: "TĂNG TRƯỞNG KINH DOANH",
    icon: <TrendingUp className="text-[#EE0033]" size={24} />,
    items: [
      "Doanh thu đạt 13.000 tỷ vào năm 2030",
      "Lợi nhuận trước thuế đạt 200 tỷ",
      "Thị phần bán lẻ điện thoại 13-15%",
      "Tỷ suất lợi nhuận/doanh thu đạt 1,5%"
    ]
  },
  {
    id: "03",
    title: "THỊ TRƯỜNG & KÊNH BÁN",
    icon: <Globe className="text-[#EE0033]" size={24} />,
    items: [
      "Mở rộng 20-30 siêu thị tại khu vực tiềm năng",
      "Kênh online chiếm 40-45% doanh thu",
      "Phát triển đa kênh: offline - online - KHDN - affiliate - tự động hóa",
      "Mở rộng thị trường quốc tế"
    ]
  },
  {
    id: "04",
    title: "CHUYỂN ĐỔI SỐ & CÔNG NGHỆ",
    icon: <Zap className="text-[#EE0033]" size={24} />,
    items: [
      "Dẫn đầu ứng dụng AI, Big Data trong bán lẻ",
      "Số hóa toàn bộ hoạt động quản trị, bán hàng, chăm sóc khách hàng",
      "Tự động hóa vận hành, thanh toán, quản trị",
      "Tăng năng suất và giảm phụ thuộc nhân lực thủ công"
    ]
  },
  {
    id: "05",
    title: "SẢN PHẨM & LĨNH VỰC MỚI",
    icon: <Box className="text-[#EE0033]" size={24} />,
    items: [
      "Xây dựng hệ sinh thái đa sản phẩm - đa dịch vụ (công nghệ, tài chính, giáo dục, sức khỏe...)",
      "Phát triển Smart Home, IoT, thiết bị sức khỏe, làm đẹp, sản phẩm cho trẻ em",
      "Triển khai lĩnh vực mới: Grocery, năng lượng, sản phẩm organic..."
    ]
  },
  {
    id: "06",
    title: "TRẢI NGHIỆM KHÁCH HÀNG",
    icon: <Star className="text-[#EE0033]" size={24} />,
    items: [
      "Nâng cao trải nghiệm theo hướng cá nhân hóa - cao cấp (luxury)",
      "Xây dựng hệ thống CRM và chăm sóc khách hàng toàn diện",
      "Chuẩn hóa đội ngũ bán hàng, nâng cao chất lượng phục vụ"
    ]
  },
  {
    id: "07",
    title: "TỔ CHỨC & NHÂN SỰ",
    icon: <UserPlus className="text-[#EE0033]" size={24} />,
    items: [
      "Xây dựng bộ máy tinh gọn - hiệu quả - công nghệ hóa",
      "Quy mô khoảng 3.200 nhân sự vào 2030",
      "Thu nhập bình quân đạt 20 triệu/người/tháng",
      "Phát triển đội ngũ chuyên nghiệp, kỷ luật, gắn bó và làm chủ công nghệ"
    ]
  },
  {
    id: "08",
    title: "ĐƠN VỊ VỮNG MẠNH",
    icon: <ShieldCheck className="text-[#EE0033]" size={24} />,
    items: [
      "Bảo đảm ổn định chính trị nội bộ, đoàn kết, kỷ luật cao",
      "Không để xảy ra tham nhũng, lãng phí, vi phạm nghiêm trọng",
      "Thực hiện tốt chính sách, chăm lo đời sống vật chất và tinh thần người lao động"
    ]
  },
  {
    id: "09",
    title: "XÂY DỰNG ĐẢNG",
    icon: <Flag className="text-[#EE0033]" size={24} />,
    items: [
      "Xây dựng Đảng bộ trong sạch, vững mạnh toàn diện",
      "100% cán bộ, đảng viên có bản lĩnh chính trị vững vàng, hoàn thành nhiệm vụ",
      "Nâng cao chất lượng công tác cán bộ, kiểm tra, giám sát, sinh hoạt chi bộ",
      "Phòng chống 'tự diễn biến', 'tự chuyển hóa', bảo vệ chính trị nội bộ"
    ]
  }
];

const heroSlides = [
  "/images/tuong-lai/slideshow/s1.png",
  "/images/tuong-lai/slideshow/s2.png",
  "/images/tuong-lai/slideshow/s3.png",
  "/images/tuong-lai/slideshow/s4.png",
  "/images/tuong-lai/slideshow/s5.png",
  "/images/tuong-lai/slideshow/s6.png",
];

export default function TuongLaiPage() {
  const [expandedIds, setExpandedIds] = React.useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleGoal = (id: string) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* 1. Main Future Vision Section */}
      <section 
        className="relative h-screen flex items-center justify-end overflow-hidden"
        style={{ background: 'rgba(0, 0, 0, 0.85)' }}
      >
        <WavyBackground />
        {/* Red Box Overlay - Now filling the section */}
        <div 
          style={{ 
            position: 'absolute',
            inset: 0,
            background: 'rgba(112, 6, 6, 0.49)',
            zIndex: 5,
            pointerEvents: 'none'
          }}
        />
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image 
                src={heroSlides[currentSlide]} 
                alt="Future Vision" 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative z-10 flex flex-col items-end text-right pr-24" style={{ transform: 'translateY(-150px)' }}>
          <div style={{ marginRight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <motion.div 
              style={{ width: '626px' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 style={{ 
                color: '#FFF', 
                fontFamily: 'var(--font-beausans)',
                fontSize: '52px', 
                fontWeight: 700, 
                lineHeight: 'normal',
                textTransform: 'uppercase',
                margin: 0,
                whiteSpace: 'nowrap'
              }}>
                VỮNG BƯỚC <motion.span 
                  style={{ color: '#E03' }}
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(224, 0, 51, 0.3)",
                      "0 0 25px rgba(224, 0, 51, 0.9)",
                      "0 0 12px rgba(224, 0, 51, 0.5)",
                      "0 0 35px rgba(224, 0, 51, 1)",
                      "0 0 5px rgba(224, 0, 51, 0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 1.8, 
                    repeat: Infinity, 
                    times: [0, 0.1, 0.2, 0.4, 1],
                    ease: "easeInOut" 
                  }}
                >
                  TƯƠNG LAI
                </motion.span>
              </h1>
            </motion.div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px', marginRight: '0px' }}>
              <p style={{
                width: '324px',
                color: '#F2F2F2',
                textAlign: 'right',
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal'
              }}>
                Từ những nỗ lực mỗi ngày, Viettel Store đang từng bước kiến tạo một tương lai phát triển vững chắc và khác biệt
              </p>
              <div style={{ width: '2px', height: '63px', background: '#E03' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TẦM NHÌN 2030 SECTION */}
      <section className="relative w-full bg-[#EE0033] overflow-hidden py-24 select-none">
        {/* Background Ripple Circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-20">
          {/* Top Left */}
          <div className="absolute top-[-100px] left-[-150px] w-[500px] h-[500px]">
            {[120, 240, 360, 480].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#F2F2F2] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>

          {/* Top Right */}
          <div className="absolute top-[-80px] right-[-100px] w-[600px] h-[600px]">
            {[150, 300, 450, 600].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#F2F2F2] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-[-100px] left-[-120px] w-[500px] h-[500px]">
            {[130, 260, 390, 520].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#F2F2F2] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-[-150px] right-[-150px] w-[550px] h-[550px]">
            {[140, 280, 420, 560].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#F2F2F2] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 flex flex-col items-center">
          {/* Top visual part with text on left and 3 circle images on right */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            {/* LEFT TEXT CONTENT */}
            <div className="flex-1 max-w-[640px] text-left">
              <h2 style={{
                color: '#F2F2F2',
                fontFamily: 'var(--font-beausans)',
                fontSize: '52px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                textTransform: 'uppercase',
                marginBottom: '40px'
              }}>
                MỤC TIÊU ĐẾN NĂM 2030
              </h2>

              <ul className="space-y-6">
                {[
                  "Công ty bán lẻ đa dịch vụ hiện đại, chuyên nghiệp hàng đầu Việt Nam",
                  "Dẫn đầu về ứng dụng công nghệ và trải nghiệm khách hàng",
                  "Đóng góp lớn cho Tập đoàn và là đại diện hình ảnh Viettel"
                ].map((text, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center gap-4 select-none cursor-pointer group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="w-9 h-9 min-w-[36px] bg-white rounded-full flex items-center justify-center text-[#EE0033] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#EE0033] group-hover:text-white">
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                    <span style={{
                      color: '#FFF',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal'
                    }}>
                      {text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* RIGHT CIRCLES CONTAINER */}
            <div className="relative w-[520px] h-[360px] flex-shrink-0 select-none">
              {/* Image Trái */}
              <div 
                className="absolute z-30"
                style={{ 
                  width: '185px', height: '185px', borderRadius: '185px', 
                  boxShadow: '4px 1px 4px 0 rgba(0, 0, 0, 0.25)',
                  top: '0px', left: '120px',
                  overflow: 'hidden'
                }} 
              >
                <Image
                  src="/images/tuong-lai/Trái.jpg"
                  alt="Trái"
                  width={185}
                  height={185}
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
              {/* Image Giữa */}
              <div 
                className="absolute z-20"
                style={{ 
                  width: '142px', height: '142px', borderRadius: '142px', 
                  boxShadow: '4px 1px 4px 0 rgba(0, 0, 0, 0.25)',
                  top: '140px', left: '10px',
                  overflow: 'hidden'
                }} 
              >
                <Image
                  src="/images/tuong-lai/Giữa.jpg"
                  alt="Giữa"
                  width={142}
                  height={142}
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
              {/* Image Phải */}
              <div 
                className="absolute z-10"
                style={{ 
                  width: '224px', height: '224px', borderRadius: '224px', 
                  boxShadow: '4px 1px 4px 0 rgba(0, 0, 0, 0.25)',
                  top: '140px', left: '260px',
                  overflow: 'hidden'
                }} 
              >
                <Image
                  src="/images/tuong-lai/Phải.jpg"
                  alt="Phải"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
            </div>
          </div>

          {/* Dividing White Line */}
          <div style={{ width: '433px', height: '2px', background: '#FFF', margin: '48px auto 48px auto' }} />

          {/* LOWER PART: Tăng trưởng kinh doanh Header */}
          <div className="text-center mb-12">
            <h3 style={{
              color: '#F2F2F2',
              textAlign: 'center',
              fontFamily: 'var(--font-beausans)',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              TĂNG TRƯỞNG KINH DOANH
            </h3>
            <p style={{
              color: '#D9D9D9',
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}>
              Mở rộng quy mô, gia tăng doanh thu và duy trì hiệu quả lợi nhuận bền vững.
            </p>
          </div>

          {/* 3 White Boxes */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {/* Box 1 */}
            <motion.div 
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#F2F2F2',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#111',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>VỊ THẾ DẪN ĐẦU</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#EE0033] mt-1 shrink-0">•</span>
                  <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                    Vững vàng <strong className="text-[#EE0033]">TOP 3</strong> chuỗi bán lẻ lớn nhất Việt Nam
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#F2F2F2',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#111',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                ĐA DẠNG SẢN PHẨM –<br />DỊCH VỤ
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#EE0033] mt-1 shrink-0">•</span>
                  <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                    Phát triển hệ sinh thái đa dạng:<br />
                    Công nghệ – Tài chính – Giáo dục – Sức khỏe – Giải trí – Smart Home
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EE0033] mt-1 shrink-0">•</span>
                  <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                    Không ngừng mở rộng danh mục sản phẩm và dịch vụ mới
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#F2F2F2',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#111',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                ĐA KÊNH – DẪN ĐẦU<br />ONLINE
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#EE0033] mt-1 shrink-0">•</span>
                  <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                    Kênh online là trụ cột tăng trưởng
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EE0033] mt-1 shrink-0">•</span>
                  <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                    Dẫn đầu thương mại điện tử
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EE0033] mt-1 shrink-0">•</span>
                  <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                    Phát triển đồng bộ các kênh:<br />
                    Cửa hàng – Online – KHDN – Affiliate – Bán hàng tự động
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CÔNG NGHỆ & BÁN LẺ MỚI SECTION */}
      <section className="relative w-full bg-[#F2F2F2] overflow-hidden py-24 select-none">
        {/* Background Ripple Circles - Left side */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-20">
          <div className="absolute top-[-50px] left-[-150px] w-[500px] h-[500px]">
            {[120, 240, 360, 480].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#E03] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>

          <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px]">
            {[130, 260, 390, 520].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#E03] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
          {/* Header text with custom widths */}
          <div className="flex flex-col items-center justify-center mb-16 select-none">
            <h3 style={{
              width: '731px',
              maxWidth: '100%',
              color: '#000',
              textAlign: 'center',
              fontFamily: 'var(--font-beausans)',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              CÔNG NGHỆ & BÁN LẺ MỚI
            </h3>
            <p style={{
              width: '537px',
              maxWidth: '100%',
              color: '#000',
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}>
              Đẩy mạnh ứng dụng AI, Big Data và phát triển hệ sinh thái bán lẻ đa dịch vụ.
            </p>
          </div>

          {/* 3 Red Boxes */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {/* Box 1 */}
            <motion.div 
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#E03',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>CÔNG NGHỆ DẪN ĐẦU</h4>
              <ul className="space-y-3">
                {[
                  "Ứng dụng AI, Big Data trong toàn bộ hoạt động",
                  "Số hóa quản trị – bán hàng – chăm sóc khách hàng",
                  "Tự động hóa vận hành, tối ưu hiệu quả"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-left">
                    <span className="text-white mt-1 shrink-0">•</span>
                    <span style={{ color: '#FFF', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#E03',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                MỞ RỘNG HỆ THỐNG<br />VÀ THỊ TRƯỜNG
              </h4>
              <ul className="space-y-3">
                {[
                  "Mở rộng hệ thống siêu thị, cửa hàng tại các thị trường tiềm năng",
                  "Trải nghiệm Luxury dành cho khách hàng VIP",
                  "Nghiên cứu mở rộng ra thị trường quốc tế và phát triển mô hình bán lẻ mới"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-left">
                    <span className="text-white mt-1 shrink-0">•</span>
                    <span style={{ color: '#FFF', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#E03',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                TRẢI NGHIỆM KHÁCH<br />HÀNG XUẤT SẮC
              </h4>
              <ul className="space-y-3">
                {[
                  "Cá nhân hóa trải nghiệm",
                  "Chăm sóc khách hàng toàn diện",
                  "Đội ngũ phục vụ chuyên nghiệp, tận tâm"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-left">
                    <span className="text-white mt-1 shrink-0">•</span>
                    <span style={{ color: '#FFF', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TỔ CHỨC VỮNG MẠNH SECTION */}
      <section className="relative w-full bg-[#EE0033] overflow-hidden py-24 select-none">
        {/* Background Ripple Circles - Top-right side */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-20">
          <div className="absolute top-[-50px] right-[-100px] w-[500px] h-[500px]">
            {[120, 240, 360, 480].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#F2F2F2] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>

          <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px]">
            {[130, 260, 390, 520].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#F2F2F2] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
          {/* Header text with custom widths */}
          <div className="flex flex-col items-center justify-center mb-16 select-none">
            <h3 style={{
              width: '731px',
              maxWidth: '100%',
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'var(--font-beausans)',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              TỔ CHỨC VỮNG MẠNH
            </h3>
            <p style={{
              width: '537px',
              maxWidth: '100%',
              color: '#F2F2F2',
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}>
              Xây dựng bộ máy tinh gọn, nhân sự chuyên nghiệp và Đảng bộ trong sạch.
            </p>
          </div>

          {/* 3 White Boxes */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {/* Box 1 */}
            <motion.div 
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#F2F2F2',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#111',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                TỔ CHỨC & NHÂN SỰ<br />TINH GỌN – HIỆU QUẢ
              </h4>
              <ul className="space-y-3">
                {[
                  "Bộ máy tinh gọn, linh hoạt, hiệu quả",
                  "Phát triển đội ngũ “tinh” có năng lực và kỷ luật",
                  "Môi trường làm việc hiện đại, đãi ngộ cạnh tranh"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-left">
                    <span className="text-[#EE0033] mt-1 shrink-0">•</span>
                    <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#F2F2F2',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#111',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                ĐƠN VỊ VỮNG MẠNH<br />TOÀN DIỆN
              </h4>
              <ul className="space-y-3">
                {[
                  "Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng",
                  "Phát triển đảng viên chất lượng",
                  "Giữ vững bản lĩnh chính trị, phòng chống “tự diễn biến”, “tự chuyển hóa”"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-left">
                    <span className="text-[#EE0033] mt-1 shrink-0">•</span>
                    <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#F2F2F2',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#111',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                XÂY DỰNG ĐẢNG BỘ TRONG<br />SẠCH, VỮNG MẠNH
              </h4>
              <ul className="space-y-3">
                {[
                  "Đảng bộ trong sạch, vững mạnh",
                  "Nâng cao chất lượng cán bộ",
                  "Bảo vệ chính trị nội bộ"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-left">
                    <span className="text-[#EE0033] mt-1 shrink-0">•</span>
                    <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. QUOTE SECTION */}
      <section 
        className="relative w-full overflow-hidden"
        style={{
          height: '900px',
          backgroundImage: 'url(/images/tuong-lai/header-ve-chung-toi.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Red Overlay */}
        <div 
          className="absolute inset-0 bg-[#EE0033] opacity-40 z-[1]"
        />
        <WavyBackground />

        {/* Content Wrapper */}
        <motion.div 
          className="relative z-[2] h-full flex flex-col items-center justify-center text-center text-white px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div style={{ 
            fontFamily: 'Rockwell', 
            fontSize: '128px', 
            fontWeight: 700, 
            marginBottom: '-20px',
            lineHeight: 'normal'
          }}>
            “
          </div>
          
          <h2 style={{
            width: '1000px',
            fontFamily: 'var(--font-beausans)',
            fontSize: '52px',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '28px',
            lineHeight: '1.2'
          }}>
            DẪN ĐẦU VỀ CÔNG NGHỆ - KHÁC BIỆT VỀ TRẢI NGHIỆM - BỨT PHÁ VỀ TĂNG TRƯỞNG
          </h2>

          <p style={{
            width: '600px',
            fontFamily: 'Roboto',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 'normal'
          }}>
            Hành trình đến 2030 là hành trình tăng trưởng, đổi mới và khẳng định vị thế của Viettel Store.
          </p>
        </motion.div>
      </section>

    </div>
  );
}
