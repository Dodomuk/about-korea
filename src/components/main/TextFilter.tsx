import { motion, Variants } from 'framer-motion';
import { contentsList } from '@/utils/everything';
import { useState } from 'react';

import { search } from '@selector/SgisSelector';
import { useRecoilState } from 'recoil';
import { Button } from '@material-tailwind/react';

//text 검색창
function TextFilter() {
    const [clicked, setClicked] = useState(false);
    const [searchText, setSearchText] = useRecoilState(search);

    let list = [{ id: 'none', title: '' }]; // 검색 조건과 일치하는 리스트
    let isVisible = false;

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

    if (searchText) {
        isVisible = true;
        list = [];
        contentsList.map((data) => {
            list.push(
                ...data.content.filter((text) => {
                    return text.title.replace(' ', '').toLocaleLowerCase().includes(searchText.trim().toLocaleLowerCase());
                })
            );
        });
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    return (
        <>
            <div>
                <p className="text-2xl">어떤 통계를 찾고 계신가요?</p>
            </div>
            <div className="mt-4">
                <input type="text" value={searchText} onChange={onChange}></input>
                <motion.nav className="searchFilter" initial={false} animate={isVisible ? 'open' : 'closed'}>
                    <motion.div variants={divVariants} style={{ pointerEvents: isVisible ? 'auto' : 'none' }}>
                        {list.map((x) => (
                            <motion.button
                                className="block text-center"
                                initial="init"
                                whileHover="hover"
                                whileTap="pressed"
                                variants={buttonVariants}
                                custom={clicked}
                                onClick={() => setClicked(true)}
                                key={x.id}
                            >
                                {x.title}
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.nav>
                <Button color="white" variant="filled" className="block text-center mt-4 font-bold text-gray-800 rounded-md">
                    검색
                </Button>
            </div>
        </>
    );
}

export default TextFilter;
