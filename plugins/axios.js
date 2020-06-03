export default ({ $axios }) => {
	const url = 'https://api.github.com'
	const token = process.env.TOKEN && `token ${process.env.TOKEN}`

	$axios.setBaseURL(url)
  
	if (token) $axios.setHeader('Authorization', token)
}