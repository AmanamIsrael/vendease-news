import { Tab as HTab } from '@headlessui/react'
import { Fragment } from 'react'

const Tabs: React.FC = () => {
    return (
        <HTab.Group>
            <HTab.List className="w-[255px] bg-grey text-grey2 h-[36px]">
                <HTab as={Fragment}>
                    {({ selected }) => (
                        <button type='button' className={`${selected ? 'border-b-2 border-b-green text-green h-full' : ''}  w-[127.25px] text-center h-full ui-selected:ring-none`}>News</button>
                    )}
                </HTab>
                <HTab as={Fragment}>
                    {({ selected }) => (
                        <button type='button' className={`${selected ? 'border-b-2  border-b-green text-green h-full' : ''} w-[127.25px] text-center h-full`}>Bookmarks</button>
                    )}
                </HTab>
            </HTab.List>
            <HTab.Panels className="bg-grey min-h-50px w-full p-3">
                <HTab.Panel>Content 1</HTab.Panel>
                <HTab.Panel>Content 2</HTab.Panel>
            </HTab.Panels>
        </HTab.Group>
    )
}

export default Tabs