import { Container, Heading, Text, Hr, Section } from '@react-email/components';
import CobaltWrapper from '../CobaltWrapper';

type EmailField = {
	label: string;
	info: string;
};

type ContactTemplateProps = {
	fields: EmailField[];
};

const ContactTemplate = ({ fields }: ContactTemplateProps) => {
	const messageField = fields.find(({ label }) => label === 'Message');
	const otherFields = fields.filter(({ label }) => label !== 'Message');

	return (
		<CobaltWrapper>
			<Section>
				<Heading className='text-cobalt'>Contact Request</Heading>
				<table className='mx-auto text-left w-500' cellPadding={20}>
					<tbody>
						{otherFields.map(({ label, info }, i) => (
							<tr key={i}>
								<td>
									<strong>{label}</strong>
								</td>
								<td>{info}</td>
							</tr>
						))}
					</tbody>
				</table>

				{messageField && (
					<Container className='w-3/4'>
						<Text className='text-lg'>
							<strong>{messageField.label}</strong>
						</Text>
						<Hr />
						<Text className='font-serif text-left'>{messageField.info}</Text>
					</Container>
				)}
			</Section>
		</CobaltWrapper>
	);
};

export default ContactTemplate;
