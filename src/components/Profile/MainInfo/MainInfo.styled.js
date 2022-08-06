import styled from 'styled-components';

export const Container = styled.div`
  margin: 0, auto;
  text-align: center;
`;
export const ImgAvatar = styled.img`
  background-image: white;
  border-radius: ${p => p.theme.radii.round};
  margin-top: ${p => p.theme.space[5]}px;
  height: 80px;
  margin: auto;
  height: 80px;
`;
export const Name = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.monospace};
`;
export const TextTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-family: ${p => p.theme.fonts.heading};
  color: gray;
`;
