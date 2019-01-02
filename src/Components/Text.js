import React from "react";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  text-align: left;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentHeader = styled.h2`
  width: 60%;
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--color-gold);
  padding: 1rem 0;
`;

const ContentText = styled.p`
  width: 60%;
  font-size: 1.6rem;
`;

const CListContainer = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const CList = styled.ul`
  list-style: none;
  padding: 2.5rem 0;
  font-size: 1.6rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const CListItem = styled.li``;

const Text = () => {
  return (
    <Content>
      <ContentHeader>✓ CSed ut perspiciatis unde</ContentHeader>
      <ContentText>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo iventore vertitatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </ContentText>

      <CListContainer>
        <CList>
          <CListItem>Otam rem aperiam</CListItem>
          <CListItem>Ipsa quae</CListItem>
          <CListItem>Unde omnis</CListItem>
          <CListItem>Voluptatem (duvrnem)</CListItem>
        </CList>

        <CList>
          <CListItem>Perspiciatis Unde</CListItem>
          <CListItem>Architecto beatae vitae</CListItem>
          <CListItem>Perspiciatis Unde</CListItem>
          <CListItem>Architecto beatae vitae</CListItem>
        </CList>

        <CList>
          <CListItem>architecto beatae viate</CListItem>
        </CList>

        <CList>
          <CListItem>Totam</CListItem>
          <CListItem>Iste Natus</CListItem>
          <CListItem>Omnis Iste Natus Erro</CListItem>
          <CListItem>Explicabo</CListItem>
        </CList>

        <CList>
          <CListItem>5.0</CListItem>
          <CListItem>Omnis iste natus</CListItem>
          <CListItem>Accusantium doloremque laudant</CListItem>
          <CListItem>Accusantium dolor</CListItem>
        </CList>
      </CListContainer>
    </Content>
  );
};

export default Text;
