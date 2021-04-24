import react from 'react';
import reactdom from 'react-dom';

function Blog(props)
{
	return(
		
	<div>
		<h1>
			Title: {props.title}
		</h1>
		
		<p>
			Content: {props.content}
		</p>
	</div>
	)
}

const bob = `
Ne eum erat sea an in ut cu oratio at has te eu ceteros essent sit ad. Hendrerit nihil te nominati option aliquid omnis movet vis sea vis theophrastus ut sea qui qui. Quo adipiscing detracto modo voluptua duo phaedrum placerat at nec postea id clita solum. Ei per splendide paulo ex cu postulant detraxit facilisis dicam atqui id has cum mel appellantur ex. Clita iriure ut nec eruditi ius qui tractatos in mel est aeterno at mea in cu mundi. Est at ei at nominavi adversarium animal ei recteque ne id per quidam solet vel. Commune per nam in eu accusata graecis no cum tincidunt placerat vix vituperata vel delicata audiam.

Eros ei id mel liber regione efficiendi ius copiosae et ne consectetuer audire. Pri argumentum copiosae elitr reprehendunt audiam rationibus equidem deseruisse melius facete has cotidieque. Eu viris cum ipsum graecis persius viris legendos signiferumque an molestiae in tamquam mel sea virtute. Impetus usu verterem modo euismod et feugait contentiones in luptatum vis luptatum ferri agam. Ut sint ne audiam has liber similique dicant ne sumo albucius pri sensibus in. Contentiones hendrerit assentior discere ea consul instructior tota ne an modus volumus referrentur. Voluptua vivendo wisi sea dicunt no malis sit luptatum minim vocent theophrastus quo no. Honestatis vivendo te noluisse argumentum sit ex facilis sanctus omnesque quo ut solet scripserit persius error.

Unum est voluptua sea salutandi duis vivendo vim eleifend voluptatum atqui mutat accusam. Pri usu iudico maluisset fastidii appellantur doctus vix dissentiet cu feugait eam fastidii et. Eu liber ex facilisis cu eam vis posidonium sapientem erat commune usu vel usu. At commune instructior congue ius nec at elaboraret ei labitur altera tractatos duis. Sed ius sit theophrastus te cotidieque natum quo adhuc ipsum accusamus adipiscing nostro. Viris mei et usu ea sint omnesque doming inani quem eu idque te veri eu tamquam mea. Philosophia nec cotidieque no eu atqui cu cum ne facilisis atomorum munere omnium id singulis. Maluisset consequat eos commodo munere te summo urbanitas legendos liber scaevola per quo vim.

Ad zril an eam case omnes eam ei atomorum no ea mandamus ei velit. Nostro agam pro vim an interpretaris mandamus theophrastus cu vix instructior nec usu repudiandae no usu quot. Te est commodo probo evertitur amet graece ludus an debitis commune erant maiorum interpretaris denique nobis. Efficiendi duo complectitur admodum constituam dicta cu nulla quaestio interesset cum ubique ex ex cu. Clita alii quo has cotidieque abhorreant ne eu dicant elaboraret at falli eu cibo dissentiunt saperet ut. Ex id urbanitas praesent at an luptatum quando debet commune vim sea ex. Ad persius facilisis nostrud saperet ad liberavisse voluptatibus at quot explicari per choro conclusionemque legendos. Legimus id iuvaret postulant et id apeirian tollit appellantur dicant sed has mea.

Aeterno delicatissimi suas nominati harum eam mei ex alterum definitionem ex magna vix persius ad. Case abhorreant duo ne scripta paulo sed id scripta accusata per no erat tempor tibique ei placerat. Eum ea elaboraret definitionem ex mel audire vix at sed fabellas oporteat inani eros at elitr ne. No quo cibo definitionem simul porro ne appareat dicat maluisset per stet cotidieque eum pro ad. His errem referrentur errem mel necessitatibus odio an animal dolore ex theophrastus duo. Vix causae mel prima ei mei id habeo ignota appareat theophrastus civibus nec his oportere. Eu his porro sea inani consequat an docendi et has laudem at principes bonorum ne iisque. Perpetua eu ad argumentum ocurreret fabellas omnis eligendi has esse oportere deterruisset at recusabo.
`

reactdom.render
(
	<div>
	<Blog title="A New Blog Post" content={bob}/>
	</div>,
	document.getElementById('root')
)

