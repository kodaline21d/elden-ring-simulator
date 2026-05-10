interface Weapon {
  name: string;
  category: string;
  baseDamage: number;
  strScaling: number;
  dexScaling: number;
  intScaling: number;
  faiScaling: number;
  arcScaling: number;
}

const weaponList: Weapon[] = [
  { name: "長牙", category: "刀", baseDamage: 115, strScaling: 0.2, dexScaling: 1.5, intScaling: 0.0, faiScaling: 0.0, arcScaling: 0.0 },
  { name: "名刀月隠", category: "刀", baseDamage: 73, strScaling: 0.1, dexScaling: 0.7, intScaling: 1.6, faiScaling: 0.0, arcScaling: 0.0 },
  { name: "屍山血河", category: "刀", baseDamage: 76, strScaling: 0.1, dexScaling: 1.2, intScaling: 0.0, faiScaling: 0.0, arcScaling: 1.1 },
  { name: "巨人砕き", category: "特大武器", baseDamage: 150, strScaling: 2.1, dexScaling: 0.0, intScaling: 0.0, faiScaling: 0.0, arcScaling: 0.0 },
  { name: "暗月の大剣", category: "大剣", baseDamage: 82, strScaling: 0.4, dexScaling: 0.4, intScaling: 1.8, faiScaling: 0.0, arcScaling: 0.0 },
  { name: "冒涜の聖剣", category: "大剣", baseDamage: 121, strScaling: 0.6, dexScaling: 0.6, intScaling: 0.0, faiScaling: 1.4, arcScaling: 0.0 },
  { name: "黒き刃", category: "短剣", baseDamage: 65, strScaling: 0.0, dexScaling: 1.2, intScaling: 0.0, faiScaling: 1.0, arcScaling: 0.0 },
  { name: "重厚なロングソード", category: "直剣", baseDamage: 110, strScaling: 1.5, dexScaling: 0.0, intScaling: 0.0, faiScaling: 0.0, arcScaling: 0.0 },
];

function calculate() {
  const getVal = (id: string) => {
    const el = document.getElementById(id) as HTMLInputElement;
    return el ? parseInt(el.value) || 0 : 0;
  };

  const setInner = (id: string, text: string) => {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  };

  // ステータス取得
  const vig = getVal('vigor');
  const min = getVal('mind');
  const end = getVal('endurance');
  const str = getVal('strength');
  const dex = getVal('dexterity');
  const int = getVal('intelligence');
  const fai = getVal('faith');
  const arc = getVal('arcane');

  // 計算
  const hp = 400 + (vig * 15) + (vig > 40 ? vig * 5 : vig * 10);
  const fp = 50 + (min * 3);
  const stamina = 80 + (end * 1.5);

  setInner('display-hp', Math.floor(hp).toString());
  setInner('display-fp', Math.floor(fp).toString());
  setInner('display-stamina', Math.floor(stamina).toString());

  // 武器計算
  const weaponSelect = document.getElementById('weapon-select') as HTMLSelectElement;
  if (!weaponSelect) return;
  const weapon = weaponList[parseInt(weaponSelect.value)];
  if (!weapon) return;

  const bonusDamage = (str * weapon.strScaling) + (dex * weapon.dexScaling) + (int * weapon.intScaling) + (fai * weapon.faiScaling) + (arc * weapon.arcScaling);
  const totalDamage = Math.floor(weapon.baseDamage + bonusDamage);

  setInner('display-name', weapon.name);
  setInner('display-category', weapon.category);
  setInner('display-base', weapon.baseDamage.toString());
  setInner('display-bonus', `+${Math.floor(bonusDamage)}`);

  const atkEl = document.getElementById('attack-power');
  if (atkEl) {
    atkEl.innerText = totalDamage.toString();
    atkEl.style.color = [str, dex, int, fai, arc].some(v => v >= 80) ? "#ff6666" : "#d4af37";
  }
}

// 初期化関数
function init() {
  const weaponSelect = document.getElementById('weapon-select') as HTMLSelectElement;
  if (!weaponSelect) return;

  weaponSelect.innerHTML = weaponList.map((w, i) =>
    `<option value="${i}">[${w.category}] ${w.name}</option>`
  ).join('');

  // 全要素にイベント登録
  document.querySelectorAll('input, select').forEach(el => {
    el.addEventListener('input', calculate);
  });

  calculate();
}

// DOM読み込み完了を待ってから実行（重要）
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}