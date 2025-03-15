import React from 'react'
import styled, { keyframes } from 'styled-components'
import { CloseTicketImage, CreateImage, JoinDiscordImage, LocateChannelImage, OpenTicketImage, TicketViewImage, VerifyImage } from '../../config/config'
import ImageView from './ImageView'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const TicketContainer = styled.div<{ className?: string }>`
  padding: 2rem;
  color: var(--purchase-main-text);
  font-family: var(--font);
  animation: ${fadeIn} 0.4s ease-out;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--purchase-main-text);
`

const StepBlock = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  animation: ${fadeIn} 0.4s ease-out;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`

const StepTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--purchase-main-text);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const StepDetail = styled.div<{ flexLayout?: boolean }>`
  display: ${props => props.flexLayout ? 'flex' : 'block'};
  justify-content: ${props => props.flexLayout ? 'space-around' : 'initial'};
  align-items: center;
  gap: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  p {
    margin-bottom: 0.8rem;
  }
  
  ul {
    margin-left: 1.5rem;
    margin-top: 0.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  strong {
    color: var(--purchase-highlight-text);
    font-weight: 600;
  }
`

const DiscordTag = styled.span`
  background: rgba(88, 101, 242, 0.2);
  color: #7289da;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9em;
`

const StyledImageView = styled(ImageView)<{ border?: boolean }>`
  max-width: 300px;
  border-radius: 8px;
  ${props => props.border && `
    border: 2px solid rgba(255, 255, 255, 0.2);
  `}
`

const TicketCreation: React.FC<{className?: string}> = ({className}) => {
    return (
        <TicketContainer className={className}>
            <Title>How to Buy a Pack</Title>
            
            <StepBlock>
                <StepTitle>Step 1: Join the Discord Server</StepTitle>
                <StepDetail flexLayout>
                    <div>
                        <p>1. Click on <strong>Join Server</strong> Button for joining Discord Server.</p>
                        <p>2. Click the link, and if prompted, log into your Discord account.</p>
                        <p>3. Click <strong>"Accept Invite"</strong> to join the server.</p>
                    </div>
                    <StyledImageView imageURL={JoinDiscordImage} alt="join discord" border />
                </StepDetail>
            </StepBlock>

            <StepBlock>
                <StepTitle>Step 2: Read Server Rules and Guidelines</StepTitle>
                <StepDetail>
                    <p>1. Navigate to the <DiscordTag>#rules</DiscordTag> or <DiscordTag>#welcome</DiscordTag> channel.</p>
                    <p>2. Read through the server rules and verify your account if required.</p>
                    <StyledImageView imageURL={VerifyImage} alt="verify" />
                </StepDetail>
            </StepBlock>

            <StepBlock>
                <StepTitle>Step 3: Locate the Ticket Creation Channel</StepTitle>
                <StepDetail flexLayout>
                    <StyledImageView imageURL={LocateChannelImage} alt="locate channel" border />
                    <div>
                        <p>1. Look for a channel named <DiscordTag>#create-ticket</DiscordTag></p>
                    </div>
                </StepDetail>
            </StepBlock>

            <StepBlock>
                <StepTitle>Step 4: Open a Ticket</StepTitle>
                <StepDetail flexLayout>
                    <div>
                        <p>1. In the <DiscordTag>#create-ticket</DiscordTag> channel, you will encounter a message from <DiscordTag>@Ticket Tool B0III</DiscordTag></p>
                        <p>2. Select an option <strong>Buy a Pack</strong> from a dropdown menu.</p>
                        <p>3. New Ticket will be created.</p>
                    </div>
                    <StyledImageView imageURL={CreateImage} alt="Create Ticket" border />
                </StepDetail>
            </StepBlock>

            <StepBlock>
                <StepTitle>Step 5: Enter the Ticket Channel</StepTitle>
                <StepDetail flexLayout>
                    <StyledImageView imageURL={OpenTicketImage} alt="Open Ticket" border />
                    <div>
                        <p>1. Once your ticket is created, the bot will automatically generate a private channel visible only to you and the support team (e.g., <DiscordTag>#ticket-1234</DiscordTag>).</p>
                        <p>2. Click on the newly created channel in the server sidebar to enter it.</p>
                    </div>
                </StepDetail>
            </StepBlock>

            <StepBlock>
                <StepTitle>Step 6: Provide Details in the Ticket</StepTitle>
                <StepDetail flexLayout>
                    <div>
                        <p>1. Introduce yourself (e.g., "<strong>Hi, I'd like to purchase a pack.</strong>").</p>
                        <p>2. Mention the <strong>name of the pack</strong> you want to buy:</p>
                        <p><em>Example:</em> "I'd like to buy the '<strong>Limited Edition Pack</strong>.'"</p>
                        <p>3. Attach your <strong>PayPal payment receipt</strong> or <strong>screenshot</strong> of the payment:</p>
                        <ul>
                            <li>Click the <strong>"+"</strong> icon at the bottom of the text box.</li>
                            <li>Select <strong>"Upload a File"</strong> and choose the screenshot of your PayPal receipt.</li>
                            <li>Add a short message if needed, like "<strong>Here is my PayPal receipt for the pack purchase.</strong>"</li>
                        </ul>
                    </div>
                    <StyledImageView imageURL={TicketViewImage} alt="Ticket View" border />
                </StepDetail>
            </StepBlock>

            <StepBlock>
                <StepTitle>Step 7: Wait for a Response</StepTitle>
                <StepDetail>
                    <p>1. The support team or server staff will review your ticket.</p>
                    <p>2. They may ask follow-up questions or provide the pack details.</p>
                    <p>3. Respond promptly to any questions they ask.</p>
                </StepDetail>
            </StepBlock>

            <StepBlock>
                <StepTitle>Step 8: Close the Ticket</StepTitle>
                <StepDetail>
                    <p>1. Once your issue is resolved, the bot or staff may close the ticket.</p>
                    <p>2. If you're prompted to close it yourself, follow these steps:</p>
                    <ul>
                        <li>React to a bot message with an emoji like 🛑 or ❌.</li>
                        <li>Or click the <strong>"Close Ticket"</strong> button if available.</li>
                    </ul>
                    <StyledImageView imageURL={CloseTicketImage} alt="Close Ticket" />
                </StepDetail>
            </StepBlock>
        </TicketContainer>
    )
}

export default TicketCreation