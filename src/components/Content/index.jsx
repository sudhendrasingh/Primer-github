import { Box } from "@primer/react"


const Content = props => {

    return <Box sx={{display: 'flex', width: '80%', justifyContent: 'space-between'}}>
        <Box sx={{p: 3, borderWidth: 1, borderStyle: 'solid', borderColor: 'border.default', width: '20%'}}>

            <Box>
                <img/>
                <Box>
                    Details for the thumbnail
                </Box>
            </Box>

        </Box>
        <Box sx={{ p: 3, borderWidth: 1, borderStyle: 'solid', borderColor: 'border.default', width: '20%'}}>
        <Box>
                <img/>
                <Box>
                    Details for the thumbnail
                </Box>
            </Box>
        </Box>
        <Box sx={{p: 3, borderWidth: 1, borderStyle: 'solid', borderColor: 'border.default', width: '20%'}}>
        <Box>
                <img/>
                <Box>
                    Details for the thumbnail
                </Box>
            </Box>
        </Box>
  </Box>

}


export default Content