"use client";

import { JourneyGrid } from "./JourneyGrid";

export const JourneySection = () => {
  return (
    <section 
      className="relative bg-[#F2F2F2] pt-12 pb-16 md:pt-[100px] md:pb-[160px]"
    >


      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="font-beausans font-bold text-[36px] md:text-[48px] text-[#EE0033] uppercase leading-tight">
            HÀNH TRÌNH TỰ HÀO
          </h2>
          <p style={{
            color: 'var(--xm-trung, #B5B4B4)',
            textAlign: 'center',
            fontFamily: 'var(--font-beausans)',
            fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            marginTop: '8px',
          }}>
            Mỗi cột mốc là một bước tiến trong hành trình phát triển bền vững
          </p>
        </div>

        <JourneyGrid />
      </div>
    </section>
  );
};
