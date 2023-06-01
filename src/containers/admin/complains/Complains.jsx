import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllComplainsReq } from '../../../service/complainService'
import useToastBar from '../../../hooks/useToastBar'
import Cards from '../../../components/card/Card'

const Complains = () => {
   const { showToast } = useToastBar()
   const [complains, setComplains] = useState([])
   const navigate = useNavigate()

   const getAllComplains = async () => {
      try {
         const { data } = await getAllComplainsReq()
         setComplains(data)
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   useEffect(() => {
      getAllComplains()
   }, [])

   const openWishCardDetails = (id) => {
      navigate(`${id}/wish-details`)
   }
   const openCharityCardDetails = (id) => {
      navigate(`${id}/charity-details`)
   }
   return (
      <ComplainTitle>
         <h1>Жалобы</h1>

         <ComplainCards>
            {complains.charityResponseWIthComplaints?.map((obj) => (
               <Cards
                  key={obj.id}
                  id={obj.id}
                  icon={obj.userImage}
                  secondIcon={obj.whomUserImage}
                  userName={obj.fullName}
                  title={obj.name}
                  img={obj.charityImage}
                  date={obj.dateOfIssue}
                  birthDate="День рождения"
                  reserve={obj.reserve}
                  changeCard="true"
                  charityMeatballsHandler={false}
                  complainChange={true}
                  display={true}
                  navigateToCharityDetails={openCharityCardDetails}
                  meatballsChangeHandler={() => openCharityCardDetails(obj.id)}
               />
            ))}

            {complains.wishResponseWithComplaints?.map((obj) => (
               <Cards
                  key={obj.id}
                  id={obj.id}
                  icon={obj.userImage}
                  secondIcon={obj.whomUserImage}
                  userName={obj.fullName}
                  birthDate="День рождения"
                  title={obj.name}
                  img={obj.wishImage}
                  date={obj.dateOfIssue}
                  reserve={obj.reserve}
                  changeCard="true"
                  charityMeatballsHandler={false}
                  complainChange={true}
                  display={true}
                  navigateToCharityDetails={openWishCardDetails}
                  meatballsChangeHandler={() => openWishCardDetails(obj.id)}
               />
            ))}
         </ComplainCards>
      </ComplainTitle>
   )
}

export default Complains

const ComplainTitle = styled('div')(() => ({
   h1: {
      padding: '40px 0 30px',
      fontWeight: 500,
      fontSize: '20px',
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '0.2px',
      color: '#020202',
   },
}))
const ComplainCards = styled('div')(() => ({
   display: 'flex',
   flexWrap: 'wrap',
   gap: '20px',
}))
