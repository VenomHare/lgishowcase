import { Helmet } from 'react-helmet-async'
import NavBar from "./../NavBar"
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const ErrorContainer = styled.div`
    width: 100svw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(33, 150, 243, 0.05) 0%, rgba(0, 188, 212, 0.05) 100%);
    animation: ${fadeIn} 0.6s ease-out;
`

const ErrorCode = styled.h1`
    font-size: 12rem;
    font-weight: 800;
    margin: 0;
    background: linear-gradient(45deg, #2196f3, #00bcd4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(33, 150, 243, 0.1);
    letter-spacing: -5px;
    line-height: 1;
    animation: ${fadeIn} 0.6s ease-out 0.2s backwards;
`

const ErrorMessage = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    margin: 1rem 0;
    color: #1976d2;
    letter-spacing: -1px;
    animation: ${fadeIn} 0.6s ease-out 0.4s backwards;
`

const ErrorDescription = styled.p`
    font-size: 1.2rem;
    color: #546e7a;
    margin: 1.5rem 0 2.5rem;
    max-width: 600px;
    line-height: 1.6;
    animation: ${fadeIn} 0.6s ease-out 0.6s backwards;
`

const HomeButton = styled(Link)`
    padding: 1.2rem 2.4rem;
    background: linear-gradient(45deg, #2196f3, #00bcd4);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    animation: ${fadeIn} 0.6s ease-out 0.8s backwards;
    position: relative;
    overflow: hidden;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2));
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(33, 150, 243, 0.2);
        
        &:before {
            transform: translateX(0);
        }
    }
`

const ErrorPage = () => {
    return (<>
        <Helmet>
            <title>404 - Page Not Found | LGI Mods</title>
            <meta name="description" content="The page you are looking for could not be found. Please check the URL and try again." />
            <meta name="robots" content="noindex" />
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "404 - Page Not Found",
                        "description": "The page you are looking for could not be found",
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "404 Error",
                                "item": "https://lgimodz.vercel.app/404"
                            }]
                        }
                    }
                `}
            </script>
        </Helmet>
        <NavBar active='' />
        <ErrorContainer>
            <ErrorCode>404</ErrorCode>
            <ErrorMessage>Page Not Found</ErrorMessage>
            <ErrorDescription>
                Oops! The page you're looking for seems to have disappeared into the digital void.
                Don't worry, you can always return to our homepage and start fresh.
            </ErrorDescription>
            <HomeButton to="/">Return to Homepage</HomeButton>
        </ErrorContainer>
    </>)
}

export default ErrorPage