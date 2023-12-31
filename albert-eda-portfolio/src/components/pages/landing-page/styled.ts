import { Box, Button, Divider } from "@mui/material"
import styled from "styled-components"

export const StyledBox = styled(Box)`
    background-color: #8AAAE5;
    text-align: center;
    border-radius: 20px;
    width: 100%;
    height: 100%;
`

export const StyledImageWrapper = styled(Box)`
    background-color: grey;
    width: 14rem;
    height: 14rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
`

export const StyledSocials = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
`

export const StyledDivider = styled(Divider)`
    width: 80%;
    height: 0.1rem;
    background-color: #8AAAE5;
    border-radius: 20px;
`

export const StyledFeed = styled(Box)`
    background-color: #8AAAE5;
    text-align: center;
    border-radius: 20px;
    width: 60.875rem;
`

export const StyledResumeButton = styled(Button)`
    width: 100%;
    max-width: 16.25rem;
    height: 3.25rem;
`