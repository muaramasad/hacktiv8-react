import React from 'react'
import Bulma from 'bulma'
import { 
  Footer, Container, Columns, Column, Content, Icon
} from 'bloomer'

const FooterStyle = {
  marginTop: '50px',
  borderTop:'1px solid #000',
  textAlign: 'center'
}

const FooterQtemu = () => {
  return (
    // <footer style={FooterStyle}>
    //     <div>
    //       Copyright Hacktiv8 2018
    //     </div>
    // </footer>
    <Footer id='footer'>
    <Container>
        <Content>
            <Columns>
                <Column isFull>
                    <p>
                        Made with<Icon hasTextColor="danger" className="fa fa-heart"></Icon> 
                        from <a>Indonesia</a>
                    </p>
                </Column>
            </Columns>
            <Content isSize='small'>
                <p>The source code is licensed under <a target="_blank">MIT</a>.</p>
                <p>The website content is licensed under <a target="_blank">CC ANS 4.0</a>.</p>
            </Content>
        </Content>
    </Container>
</Footer>
  )
}

export default FooterQtemu