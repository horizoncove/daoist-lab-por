/**
 * 极简五行命名引擎 (MVP 逻辑)
 * 逻辑：根据出生月份判断季节，推导出平衡所需的五行，并从库中选择匹配的灵性姓名。
 */

type Element = 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water';

interface SpiritualName {
  name: string;
  meaning: string;
  element: Element;
}

const NAME_POOL: Record<Element, SpiritualName[]> = {
  Wood: [
    { name: 'Qing Lin (青林)', meaning: 'Azure Forest, representing growth and vitality.', element: 'Wood' },
    { name: 'Mu Xi (沐曦)', meaning: 'Bathed in morning sunlight, wood seeking light.', element: 'Wood' }
  ],
  Fire: [
    { name: 'Zhu Yan (烛焰)', meaning: 'Candle flame, providing clarity and warmth.', element: 'Fire' },
    { name: 'Chi Yang (炽阳)', meaning: 'Blazing Sun, representing extreme energy.', element: 'Fire' }
  ],
  Earth: [
    { name: 'Hou Tu (厚土)', meaning: 'Deep Earth, representing stability and nurturing.', element: 'Earth' },
    { name: 'Kun Peng (坤鹏)', meaning: 'The great bird of the earth, bridging ground and sky.', element: 'Earth' }
  ],
  Metal: [
    { name: 'Jian Feng (剑锋)', meaning: 'Sword edge, representing precision and cutting through obstacles.', element: 'Metal' },
    { name: 'Rui Ze (锐泽)', meaning: 'Sharp Brilliance, representing intelligence and value.', element: 'Metal' }
  ],
  Water: [
    { name: 'Ruoshui (若水)', meaning: 'Like water, the highest good is to flow and adapt.', element: 'Water' },
    { name: 'Ling Xi (灵溪)', meaning: 'Spiritual Creek, connecting deep wisdom.', element: 'Water' }
  ]
};

export function getSpiritualName(birthMonth: number): SpiritualName {
  let missingElement: Element;

  // 极简季节逻辑 (北半球)
  if (birthMonth >= 3 && birthMonth <= 5) missingElement = 'Metal'; // 春季木旺，补金
  else if (birthMonth >= 6 && birthMonth <= 8) missingElement = 'Water'; // 夏季火旺，补水
  else if (birthMonth >= 9 && birthMonth <= 11) missingElement = 'Wood'; // 秋季金旺，补木
  else missingElement = 'Fire'; // 冬季水旺，补火

  const pool = NAME_POOL[missingElement];
  return pool[Math.floor(Math.random() * pool.length)];
}
