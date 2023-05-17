import React from 'react'
import { IconButton, styled } from '@mui/material'
import SearchInput from '../components/UI/search-input/SearchInput'
import { ReactComponent as BallIcon } from '../assets/icons/ball.svg'
import UserMenu from './HeaderMenu'

const Header = () => {
   return (
      <div>
         <StyledHeader>
            <SearchInput inputChangeProps={true} />
            <StyledContainer>
               <StyledIconButton>
                  <BallIcon />
               </StyledIconButton>
               <UserMenu />
            </StyledContainer>
         </StyledHeader>
      </div>
   )
}

export default Header
const StyledHeader = styled('header')`
   display: flex;
   padding: 20px 40px 20px 20px;
   background-color: #ffffff;
`
const StyledContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.25rem;
`
const StyledIconButton = styled(IconButton)`
   margin-left: 1.2rem;
   margin-right: 1.2rem;
`
