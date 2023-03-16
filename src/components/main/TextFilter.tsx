import { motion, Variants } from 'framer-motion';
import { contentsList } from '@/utils/everything';
import { useState } from 'react';

//text 검색창
function TextFilter(props: { searchText: string }) {
    const searchText = props.searchText;
    const [clicked, setClicked] = useState(false);

    const divVariants: Variants = {
        open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
            }
        },
        closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3
            }
        }
    };

    const buttonVariants = {
        hover: (clicked: boolean) => ({
            scale: clicked ? 1 : 1.5
        }),
        pressed: { scale: 0.5 },
        init: { scale: 1 }
    };

    let list = [{ id: 'none', title: '' }];
    let isOpen = false;

    if (searchText) {
        isOpen = true;
        list = contentsList.filter((text) => {
            return text.title.replace(' ', '').toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
        });
    }

    return (
        <motion.nav className="searchFilter" initial={false} animate={isOpen ? 'open' : 'closed'}>
            <motion.div variants={divVariants} style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
                {list.map((x) => (
                    <motion.button initial="init" whileHover="hover" whileTap="pressed" variants={buttonVariants} custom={clicked} onClick={() => setClicked(true)} key={x.id}>
                        {x.title}
                    </motion.button>
                ))}
            </motion.div>
        </motion.nav>
    );
}

export default TextFilter;
