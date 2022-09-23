import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

import { GuideSection } from '../../../components/guides/GuideSection';
import { GuideSectionHeader } from '../../../components/guides/GuideSectionHeader';
import { StillNeedHelp } from '../../../components/guides/StillNeedHelp';
import { TableOfContents } from '../../../components/guides/TableOfContents';
import Column from '../../../components/layout/Column';
import { Footer } from '../../../components/layout/Footer';
import PageWrapper from '../../../components/layout/PageWrapper';
import { Navigation } from '../../../components/navigation';
import { Heading } from '../../../components/primitives/Heading';

type Section = {
	anchor: string;
	title: string;
};

const sections: Record<string, Section> = {
	navigateDashboard: { anchor: 'navigate-to-the-dashboard', title: 'Navigate to the dashboard' },
	navigateRoles: {
		anchor: 'navigate-to-the-roles-page',
		title: 'Navigate to the roles page'
	},
	editRole: { anchor: 'edit-a-role', title: 'Edit a role' }
};

const EditingARoleGuidePage: NextPage = () => {
	return (
		<>
			<Navigation />

			<PageWrapper>
				<NextSeo
					title="Editing a role — Meetuppp"
					description={`Learn how to edit a role for your event on Meetuppp.`}
					openGraph={{
						url: 'https://evental.app/guides/role/editing-a-role',
						title: 'Editing a role — Meetuppp',
						description: `Learn how to edit a role for your event on Meetuppp.`,
						images: [
							{
								url: 'https://cdn.evental.app/images/logo.jpg',
								width: 389,
								height: 389,
								alt: 'Meetuppp Logo Alt',
								type: 'image/jpeg'
							}
						]
					}}
				/>

				<div className="bg-primary-700 text-white">
					<Column className="flex flex-col items-center">
						<Heading>Editing a role</Heading>
						<p className="mt-4 text-base text-gray-100">
							Learn how to edit a role for your event on Meetuppp.
						</p>
					</Column>
				</div>

				<Column>
					<TableOfContents
						items={[
							{
								text: sections.navigateDashboard.title,
								relativeLink: `/guides/role/editing-a-role#${sections.navigateDashboard.anchor}`
							},
							{
								text: sections.navigateRoles.title,
								relativeLink: `/guides/role/editing-a-role#${sections.navigateRoles.anchor}`
							},
							{
								text: sections.editRole.title,
								relativeLink: `/guides/role/editing-a-role#${sections.editRole.anchor}`
							}
						]}
					/>

					<GuideSection id={sections.navigateDashboard.anchor}>
						<GuideSectionHeader
							text={sections.navigateDashboard.title}
							url={`/guides/role/editing-a-role#${sections.navigateDashboard.anchor}`}
						/>

						<p className="mb-4 text-gray-700">
							To edit a role, navigate to the events admin dashboard by clicking the{' '}
							<span className="font-medium">"manage this event"</span> button.
						</p>
					</GuideSection>

					<GuideSection id={sections.navigateRoles.anchor}>
						<GuideSectionHeader
							text={sections.navigateRoles.title}
							url={`/guides/role/editing-a-role#${sections.navigateRoles.anchor}`}
						/>

						<p className="mb-4 text-gray-700">
							After visiting the events dashboard, click the{' '}
							<span className="font-medium">"Roles"</span> link in the top navigation.
						</p>
					</GuideSection>

					<GuideSection id={sections.editRole.anchor}>
						<GuideSectionHeader
							text={sections.editRole.title}
							url={`/guides/role/editing-a-role#${sections.editRole.anchor}`}
						/>

						<p className="mb-4 text-gray-700">
							After visiting the roles dashboard page, select the role you wish to edit by clicking
							the role.
						</p>
						<p className="mb-4 text-gray-700">
							After selecting a role, select the <span className="font-medium">"Edit"</span> button.
						</p>

						<p className="mb-4 text-gray-700">
							After selecting the "Edit" button. You will be navigated to the edit role form. Fill
							out the edit role form to edit a role.
						</p>
					</GuideSection>

					<GuideSection>
						<StillNeedHelp />
					</GuideSection>
				</Column>

				<Footer />
			</PageWrapper>
		</>
	);
};

export default EditingARoleGuidePage;
