import styled from "styled-components";

export const Nav = styled.nav`
  height: 20px;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-around;
  list-style: none;
`;

export const Li = styled.li`
  cursor: pointer;
  list-style: none;
  color: white;
`;

export const ThumbnailCard = styled.div`
  height: 200px;
  width: 300px;
  background-color: grey;
  border-radius: 10px;
  padding: 10px;
`;

export const Button = styled.button`
  width: 190px;
  height: 50px;
  border-radius: 10px;
  background-color: orange;
  color: white;
  font-size: 17px;
  border: none;
  cursor: pointer;
`;

export const MainContainer = styled.main`
  padding: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const UserProfile = styled.div`
  background: grey;
  width: 1000px;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
`;

export const Underline = styled.div`
  width: 100%;
  background-color: orange;
  height: 3px;
`;

export const UserSectionTop = styled.section`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const UserSectionBottom = styled.section`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UserSectionBottomComm = styled.section`
  height: 60%;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  overflow-y: scroll;
  padding: 20px 0px;
`;

export const PostThumb = styled.article`
  border: 2px solid orange;
  padding: 5px;
  height: 200px;
  width: 323px;
  color: white;
  text-transform: capitalize;
  position: relative;
  margin: 0 5px;
`;

export const CarouselContainer = styled.div`
  height: 250px;
  position: relative;
  width: 1000px;
  overflow: hidden;
`;

export const PostContainer = styled.article`
  height: 70%;
  margin: 0 auto;
  border: 2px solid orange;
  width: 400px;
  padding: 20px;
  text-align: center;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const CommentContainer = styled.article`
  height: 150px;
  border: 2px solid orange;
  align-self: flex-start;
  margin: 10px 0px;
  width: 500px;
  text-transform: capitalize;
  padding: 10px 3px;
`;

export const TodoContainer = styled.article`
  height: 150px;
  border: 2px solid orange;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
  width: 500px;
  text-transform: capitalize;
  padding: 10px 3px;
`;
