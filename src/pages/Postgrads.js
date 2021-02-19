import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "components/features/TwoColWithButton.js";
import WallOfText from "components/blogs/Paragraphs.js";
import { CustomBanner as Banner } from "components/hero/BackgroundAsImageWithCenteredContent";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Banner heading1="Our PHD/MASTERS" heading2="Programs" />
      <WallOfText headingText="OUR PHD/MASTERS PROGRAMS" />
      <MainFeature1
        subheading={<Subheading>MASTER PROGRAMS</Subheading>}
        heading="EXECUTIVE MASTER OF SMART CITY AND INNOVATION MANAGEMENT"
        description = "Chương trình Thạc sĩ điều hành cao cấp Quản lý đô thị thông minh và sáng tạo (Executive Master of Smart City and Innovation Management) trang bị cho người học có trình độ chuyên môn sâu, có năng lực làm chủ các lĩnh vực quản lý, khoa học công nghệ có liên quan đến các giải pháp tích hợp quy hoạch, thiết kế đô thị, đặc biệt là các đô thị thông minh."
        primaryButtonUrl="phds/1"
        buttonRounded={false}
        primaryButtonText="Learn more"
        imageSrc="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      />
      <MainFeature1
        subheading={<Subheading>PHD PROGRAMS</Subheading>}
        heading="PHD PROGRAMS"
        description = "Coming Soon"
        primaryButtonUrl="phds/2"
        buttonRounded={false}
        primaryButtonText="Learn more "
        imageSrc="https://images.unsplash.com/photo-1496469888073-80de7e952517?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
      />
    </AnimationRevealPage>
  );
};
