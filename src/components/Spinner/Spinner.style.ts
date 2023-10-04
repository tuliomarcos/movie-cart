import styled from 'styled-components'
import { Spinner } from './Spinner'

export const LoadSpinner = styled(Spinner)`
    animation: spin 1s ease-in-out infinite;

    @keyframes spin {
        to { 
            transform: rotate(360deg);
        }
    }
`