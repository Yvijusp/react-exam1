import React, { useReducer } from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import styled from 'styled-components';

const LikeContainer = styled.div`
  padding: 20px;
  display: flex;

  div {
    margin: 4px;
    display: flex;
    align-items: center;
    gap: 3px;

    .like {
      color: blue;
      cursor: pointer;
    }

    .dislike {
      color: red;
      cursor: pointer;
    }
  }
`;

const initialState = {
  likes: 0,
  dislikes: 0,
  likeClicked: false,
  dislikeClicked: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'like':
      if (state.likeClicked) {
        return {
          ...state,
          likes: state.likes > 0 ? state.likes - 1 : state.likes,
          likeClicked: false,
        };
      }
      return {
        ...state,
        likes: state.likes + 1,
        dislikes: state.dislikes > 0 ? state.dislikes - 1 : state.dislikes,
        dislikeClicked: true,
        likeClicked: true,
      };
    case 'dislike':
      if (state.dislikeClicked) {
        return {
          ...state,
          dislikes: state.dislikes + 1,
          likes: state.likes > 0 ? state.likes - 1 : state.likes,
          likeClicked: false,
          dislikeClicked: false,
        };
      }
      return {
        ...state,
        dislikes: state.dislikes > 0 ? state.dislikes - 1 : state.dislikes,
        dislikeClicked: true,
      };
    default:
      throw new Error();
  }
};

function Task2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Task 2</h3>

      <LikeContainer>
        <div>
          <FiThumbsUp
            className='like'
            onClick={() => dispatch({ type: 'like' })}
          />
          <span>{state.likes}</span>
        </div>
        <div>
          <FiThumbsDown
            className='dislike'
            onClick={() => dispatch({ type: 'dislike' })}
          />
          <span>{state.dislikes}</span>
        </div>
      </LikeContainer>
    </div>
  );
}

export default Task2;

/* Task 2
Atkurkite šį komponentą: https://prnt.sc/1296zmk

Pastabos, vartotojui leidžiama balsuoti, tik vieną kartą. 
Paspaudus ant vieno mygtuko, antrą kartą paspausti ant jo 
negalima, tačiau leidžiama pakeisti nuomonę ir paspausti 
ant kito. Tokiu atveju nuo prieš tai paspausto balsas "nuimamas"
ir perduodamas kitam.

Pastaba: būtina panaudoti useReducer
*/
