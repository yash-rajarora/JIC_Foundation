import {
    Heading,    
    Text, 
    Box,
    Image
} from '@chakra-ui/react'

export default function Blog1(){
  return(
    <>
    <Box pt={['25%','10%']} px={'10%'} pb={'5%'}>
      
        <Heading as="h1" size="3xl" mb={8} textAlign="center">
          <Text fontWeight='700' className='gradient-text1' fontSize={['27','65']} letterSpacing={'-1.972px'}>
          FROM MUSIC TO BUSINESS: HOW TAYLOR SWIFT IS GOING TO EARN ₹1500 CRORES FROM HER UPCOMING TOUR.
          </Text>
        </Heading>
        
    </Box>
    <Box px={['10%','15%']} pb={'4%'}>
      <Image 
        src="https://www.hindustantimes.com/ht-img/img/2023/08/04/550x309/California-Hotel-Strike-Taylor-Swift-0_1691137412346_1691137445960.jpg" 
        // height={'30rem'}
        width={['90rem','80rem']}
      />
    </Box>
    <Box px={["15%",'25%']} pb={'4%'}>
      <Text fontSize={['12px','15px']}>
      Taylor Swift is an international singer-songwriter who has not only succeeded in the music
      industry, but has demonstrated exceptional business acumen in acting and directing her career
      to make more money from tourism. Swift managed to earn 15 billion rupees (around $200
      million) from their rounds, which can be attributed to several important factors.<br/><br/>
      First, she built a strong and loyal presence thanks to her beautiful songs, catchy vocals, and
      personal bond with her listeners. Swift actively engages, maintains relationships and builds
      loyalty with fans through social media platforms. In addition, Swift's carefully planned and
      executed tours brought her financial success.He carefully selects tour dates and locations,
      targeting markets where his fans are particularly strong.

      </Text>
    </Box>
    <Box px={['15%','20%']} pb={'4%'}>
      <Image 
        src="https://www.hindustantimes.com/ht-img/img/2023/08/04/550x309/California-Hotel-Strike-Taylor-Swift-0_1691137412346_1691137445960.jpg" 
        // height={'30rem'}
        width={'60rem'}
      />
    </Box>
    <Box px={["15%",'25%']} pb={'4%'}>
      <Text fontSize={['12px','15px']}>
      Swift's tours are known for their generous produce, stunning scenery, and great performances.
      It creates an environment where fans are willing to invest in concert tickets and merchandise,
      providing a unique experience. Swift's business strategy includes a new approach to ticketing
      and pricing. He uses a variety of tactics to combat ticket sales and ensure his fans get tickets at
      reasonable prices.This includes the use of fan registration certificates and the use of dynamic
      pricing technology that adjusts ticket prices based on demand.<br/><br/>
      In addition, Swift has benefited from its brand through sales and promotion. They have various
      products such as clothing, accessories and collectibles that strengthen their bond with their fans
      and provide additional income. Additionally, Swift leveraged business support with big names,
      using its reputation and influence to attract partners who fit its brand. Plus, Swift's business
      acumen goes beyond music and touring.Turnover suggested diversifying his income by entering
      other fields such as acting and advertising. This distinction allowed him to use his fame and
      talent to increase his income from music sales and tours.<br/><br/>
      All in all, Taylor Swift's commercial success and ability to earn Rs 150 from tours can be
      attributed to her strong brand, loyal fan base, great tour planning, new startup ideas, sales,
      sponsorship deals and diversity. His strategy to run his career and capitalize on his fame has
      made him not only a millionaire in the music industry, but also an entrepreneur.

      </Text>
    </Box>
    </>
  )
}