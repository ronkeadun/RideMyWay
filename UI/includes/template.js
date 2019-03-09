let pStyle = `font-family: sans-serif; line-height:1.4;`

module.exports.link = url =>`<a href= "${url}" title= "${url}">${url}</a>`

module.exports.table = content => console.log(
`<!DOCTYPE html>
<html>
<head>
	<style>
		p{
			${pStyle}
		}
	</style>
</head>
<body>
	<table width="300" cellspacing="0" cellpadding="0" border="0">
		<tbody>
			<tr>
				<td width="300">
					${content.map(line =>
						`<p style= "${pStyle}">${line}</p>`).join('\n                                        ')
					}
				</td>
			</tr>
		</tbody>
	</table>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
</body>
</html>
`
)