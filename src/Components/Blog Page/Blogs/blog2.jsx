import {
    Heading,    
    Text, 
    Box,
    Image
} from '@chakra-ui/react'

export default function Blog2(){
  return(
    <>
    <Box pt={['25%','10%']} px={'10%'} pb={'5%'}>
      
        <Heading as="h1" size="3xl" mb={8} textAlign="center">
          <Text fontWeight='700' className='gradient-text1' fontSize={['35','65']} letterSpacing={'-1.972px'}>
          JOURNEY OF REDBULL AND MARKETING STRATEGY
          </Text>
        </Heading>
        
    </Box>
    <Box px={['10%','15%']} pb={'4%'}>
      <Image 
        src="https://media.npr.org/assets/img/2022/10/23/ap22295802404552_custom-fe1a268512e52fb2b20472bbf854be21ff77edc3-s900-c85.webp"
        // height={'30rem'}
        width={['90rem','80rem']}
      />
    </Box>
    <Box px={["15%",'25%']} pb={'4%'}>
      <Text fontSize={['12px','15px']}>
        Red Bull is a well-known energy drink that was founded in 1984 by Austrian businessman
        Dietrich Mateschitz. The company owes its success to its unique marketing and cost-effective
        strategies.<br /><br />
        On the production front, Red Bull has not made public the details of its production process.
        However, some general observations can be compiled. Red Bull takes advantage of economies
        of scale by producing more beverages that save costs.In addition, the product further reduces
        production costs by providing an abundance of important components such as caffeine, taurine
        and B vitamins.<br /><br />
        In addition, Red Bull's effective supply chain management helps it sell products at a higher
        price. The company built relationships with suppliers and improved its logistics and distribution
        to ensure an efficient and cost-effective process from production to retail. By managing product
        quality, Red Bull can reduce costs and maximize profits. In terms of price, Red Bull adopts the
        best price.
      </Text>
    </Box>
    <Box px={['15%','20%']} pb={'4%'}>
      <Image 
        src="https://media.npr.org/assets/img/2022/10/23/ap22295802404552_custom-fe1a268512e52fb2b20472bbf854be21ff77edc3-s900-c85.webp" 
        // height={'30rem'}
        width={'60rem'}
      />
    </Box>
    <Box  px={["15%",'25%']} pb={'4%'}>
      <Text fontSize={['12px','15px']}>
        The brand itself is a quality drink, a special energy that distinguishes it from regular drinks. Red
        Bull emphasizes its unique style, performance and connection to an active and adventurous life.
        The brand accepts a higher price by creating a better image, which helps increase margins. It's
        worth noting that Red Bull's value proposition also takes into account extensive marketing and
        sales. The company invests heavily in advertising, sports promotion and corporate content
        creation.These events created brand awareness, generated consumer demand and helped
        demonstrate that Red Bull is a quality product.<br /><br />
        While the production costs and pricing details of Red Bull have not been made public, a
        combination of good manufacturing processes, supply chain management and
        cost-effectiveness has driven profit and success.<br /><br />
        To learn more about Red Bull's development story, production and pricing strategy, you can
        refer to the following link: Red Bull - Company (Link: https://www.redbull.com/int-en/About Us)
        Red Bull story (link: https://www.bbc.co.uk/news/magazine-22026275) Red Bull: Mastering
        Content Marketing (Link:
        https://contentmarketinginstitute.com/2016/06/red-bull-mastering-content-marketing/) Red Bull's
        Marketing Mix: What makes this goal successful? (Link:
        https://blog.hubspot.com/marketing/red-bull-marketing) How Red Bull takes content marketing
        to the extreme (Link: https://www.forbes.com/sites/jaysondemers/2016/02/ 09/how-red-bull -
        take content marketing to the extreme/?sh=16f37c4e4b6b) Red Bull Supply Chain
        Management (link: https://www.jda.com/knowledge-center/red-bull-chooses-jda/) How Red Bull
        Makes Money: Selling More Than Drinks (Continued: https://www.fool.com/investing/2019
        /03/19 / how - red-bull-makes-money.aspx) This resource provides insight into Red Bull's
        design, manufacturing, pricing and overall success story, providing a good understanding of the
        goals and achievements.

      </Text>
    </Box>
    </>
  )
}