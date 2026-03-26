import React, { useState } from "react";
import Button from "../../ui/Button/Button";

const projectsData = [
  { id: 1, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
  { id: 2, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
];

// ────────────────────────────────────────────────
// Tab 1 & 2 shared: عروض الشركات
// ────────────────────────────────────────────────
function OrdoodAlsharaket() {
  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex items-center gap-2 flex-wrap text-sm">
        <label className="font-medium">الشركة</label>
        <input defaultValue="مكتب الشرق للمقاولات" className="border border-gray-300 rounded px-2 py-1 bg-background flex-1 min-w-40" />
        <label className="font-medium">نوع العرض</label>
        <select className="border border-gray-300 rounded px-2 py-1 bg-background">
          <option>عرض اساسي</option>
        </select>
        <label className="font-medium">رقم العرض</label>
        <input defaultValue="50" className="border border-gray-300 rounded px-2 py-1 bg-background w-20" />
      </div>
      <div className="flex items-center gap-2 flex-wrap text-sm">
        <label className="font-medium">تاريخ العرض</label>
        <select className="border border-gray-300 rounded px-2 py-1 bg-background">
          <option>2025/8/10</option>
        </select>
        <label className="font-medium">تاريخ نهاية العرض</label>
        <select className="border border-gray-300 rounded px-2 py-1 bg-background">
          <option>2025/12/8</option>
        </select>
        <label className="font-medium">الترتيب المسلسل</label>
        <input defaultValue="2552" className="border border-gray-300 rounded px-2 py-1 bg-background w-20" />
      </div>
      <Button size="sm" variant="primary">بيان عرض الشركة من الاصناف</Button>
      {/* Items table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-2 font-semibold border-l border-gray-200">كود الصنف</th>
              <th className="p-2 font-semibold border-l border-gray-200">اسم الصنف</th>
              <th className="p-2 font-semibold border-l border-gray-200">الوحدة</th>
              <th className="p-2 font-semibold border-l border-gray-200">الكمية</th>
              <th className="p-2 font-semibold border-l border-gray-200">المواصفات</th>
              <th className="p-2 font-semibold">رقم البند</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, kod: "55", wasf: "توريد مفصلات بلاستك", wahda: "3", kamiya: "20", mwasafat: "مفصلات بلاستك", raqmBand: "1" },
              { id: 2, kod: "4", wasf: "توريد حوض 60 سم", wahda: "3", kamiya: "15", mwasafat: "مفصلات بلاستك", raqmBand: "5" },
              { id: 3, kod: "684", wasf: "توريد خزان بماكينة تعبئة", wahda: "3", kamiya: "1555", mwasafat: "مفصلات بلاستك", raqmBand: "6" },
              { id: 4, kod: "45", wasf: "توريد مفصلات بلاستك", wahda: "3", kamiya: "456", mwasafat: "مفصلات بلاستك", raqmBand: "8" },
              { id: 5, kod: "7877", wasf: "توريد حوض 60 سم", wahda: "3", kamiya: "887", mwasafat: "مفصلات بلاستك", raqmBand: "20" },
              { id: 6, kod: "222", wasf: "توريد خزان بماكينة تعبئة", wahda: "3", kamiya: "544", mwasafat: "مفصلات بلاستك", raqmBand: "15" },
            ].map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-2 border-l border-gray-100">{row.kod}</td>
                <td className="p-2 border-l border-gray-100">{row.wasf}</td>
                <td className="p-2 border-l border-gray-100">{row.wahda}</td>
                <td className="p-2 border-l border-gray-100">{row.kamiya}</td>
                <td className="p-2 border-l border-gray-100">{row.mwasafat}</td>
                <td className="p-2">{row.raqmBand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Tab 2: اجراءات الفتح الفني (Screenshot 163512)
// ────────────────────────────────────────────────
function EjraaatAlFathAlFani() {
  const committeeData = [
    { id: 1, raqmRatba: "مقدم أج", raqm: "احمد محمود السيد", wazifa: "رئيس اللجنة", mawqi3: true, tiba3a: "طباعة نموذج 7" },
    { id: 2, raqmRatba: "نقيب", raqm: "على احمد على", wazifa: "عضو اللجنة", mawqi3: false, tiba3a: "طباعة نموذج 8" },
    { id: 3, raqmRatba: "مقدم", raqm: "ممدوح شاكر فتحي", wazifa: "مندوب العقود", mawqi3: true, tiba3a: "طباعة نموذج 12" },
    { id: 4, raqmRatba: "ملازم", raqm: "عبدالله محمد احمد", wazifa: "عضو هيئة القضاء", mawqi3: false, tiba3a: "طباعة نموذج 11" },
  ];
  const companiesResult = [
    { id: 1, mosalsal: "3/1", kod: "6618", sharika: "مكتب الشرق للمقاولات", naw3: "عرض اساسي", tamin: "بدون تأمين ابتدائي", tarikh: "2025/5/3", qarar: "مقبول", raqmMwafaqa: "29555", adad: "12", naw3Waraqa: "مبلغ إجمالي" },
    { id: 2, mosalsal: "5/2", kod: "6619", sharika: "مكتب الشرق للمقاولات", naw3: "عرض اساسي", tamin: "بدون تأمين ابتدائي", tarikh: "2025/5/3", qarar: "مقبول", raqmMwafaqa: "29556", adad: "22", naw3Waraqa: "طابعة شاحة" },
    { id: 3, mosalsal: "4/3", kod: "9555", sharika: "مكتب الشرق للمقاولات", naw3: "عرض اساسي", tamin: "بدون تأمين ابتدائي", tarikh: "2025/5/3", qarar: "مقبول", raqmMwafaqa: "29557", adad: "15", naw3Waraqa: "مبلغ إجمالي" },
    { id: 4, mosalsal: "6/4", kod: "2145", sharika: "مكتب الشرق للمقاولات", naw3: "عرض اساسي", tamin: "بدون تأمين ابتدائي", tarikh: "2025/5/3", qarar: "مقبول", raqmMwafaqa: "29558", adad: "6", naw3Waraqa: "شفافة بلاك" },
  ];

  return (
    <div className="space-y-4" dir="rtl">
      {/* Print buttons */}
      <div className="flex flex-col gap-2 w-40">
        <Button size="sm" variant="primary">طباعة نموذج 1/أ</Button>
        <Button size="sm" variant="primary">طباعة نموذج الفني</Button>
        <Button size="sm" variant="primary">طباعة نموذج 6/ح</Button>
        <Button size="sm" variant="primary">طباعة نموذج 7</Button>
      </div>

      {/* Committee table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">الرتبة</th>
              <th className="p-3 font-semibold border-l border-gray-200">الاسم</th>
              <th className="p-3 font-semibold border-l border-gray-200">الوظيفة</th>
              <th className="p-3 font-semibold border-l border-gray-200">موقع</th>
              <th className="p-3 font-semibold">طباعة نموذج</th>
            </tr>
          </thead>
          <tbody>
            {committeeData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.raqmRatba}</td>
                <td className="p-3 border-l border-gray-100">{row.raqm}</td>
                <td className="p-3 border-l border-gray-100">{row.wazifa}</td>
                <td className="p-3 border-l border-gray-100">
                  <input type="checkbox" checked={row.mawqi3} readOnly className="w-4 h-4 accent-primary-500" />
                </td>
                <td className="p-3">{row.tiba3a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Companies result table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-2 font-semibold border-l border-gray-200">المسلسل</th>
              <th className="p-2 font-semibold border-l border-gray-200">الكود</th>
              <th className="p-2 font-semibold border-l border-gray-200">الشركة</th>
              <th className="p-2 font-semibold border-l border-gray-200">نوع العرض</th>
              <th className="p-2 font-semibold border-l border-gray-200">التأمين الابتدائي</th>
              <th className="p-2 font-semibold border-l border-gray-200">تاريخ البث الفني</th>
              <th className="p-2 font-semibold border-l border-gray-200">قرار اللجنة</th>
              <th className="p-2 font-semibold border-l border-gray-200">رقم الموافقة الامنية</th>
              <th className="p-2 font-semibold border-l border-gray-200">عدد الاوراق</th>
              <th className="p-2 font-semibold">نوع الورقة</th>
            </tr>
          </thead>
          <tbody>
            {companiesResult.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-2 border-l border-gray-100">{row.mosalsal}</td>
                <td className="p-2 border-l border-gray-100">{row.kod}</td>
                <td className="p-2 border-l border-gray-100">{row.sharika}</td>
                <td className="p-2 border-l border-gray-100">{row.naw3}</td>
                <td className="p-2 border-l border-gray-100">{row.tamin}</td>
                <td className="p-2 border-l border-gray-100">{row.tarikh}</td>
                <td className="p-2 border-l border-gray-100">
                  <select defaultValue={row.qarar} className="border border-gray-300 rounded px-1 py-0.5 text-xs bg-background">
                    <option>مقبول</option>
                    <option>مرفوض</option>
                  </select>
                </td>
                <td className="p-2 border-l border-gray-100">{row.raqmMwafaqa}</td>
                <td className="p-2 border-l border-gray-100">{row.adad}</td>
                <td className="p-2">
                  <select defaultValue={row.naw3Waraqa} className="border border-gray-300 rounded px-1 py-0.5 text-xs bg-background">
                    <option>مبلغ إجمالي</option>
                    <option>طابعة شاحة</option>
                    <option>شفافة بلاك</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Tab 3: اجراءات الفتح المالي (Screenshot 163536)
// ────────────────────────────────────────────────
function EjraaatAlFathAlMali() {
  const committeeData = [
    { id: 1, raqmRatba: "مقدم", raqm: "احمد محمد على", wazifa: "رئيس اللجنة", ta3mal: true, tiba3a: "طباعة نموذج 12" },
    { id: 2, raqmRatba: "ملازم", raqm: "ياسر على محمود", wazifa: "عضو هيئة القضاء", ta3mal: false, tiba3a: "طباعة نموذج 12" },
    { id: 3, raqmRatba: "ملازم", raqm: "تامر السيد احمد", wazifa: "عضو اللجنة المالية", ta3mal: true, tiba3a: "طباعة نموذج 12" },
    { id: 4, raqmRatba: "ملازم", raqm: "محمود احمد على", wazifa: "مراجع", ta3mal: false, tiba3a: "طباعة نموذج 12" },
  ];

  const data = [
    {
      id: 1, mosalsal: "3/1",
      kodSharika: "9990",
      sharika: "مكتب الشرق للمقاولات",
      naw3: "عرض اساسي",
      taminIbtidaai: "ورود بدون تأمين ابتدائي",
      qimaOrd: "55940634455.000",
      adad: "13",
      naw3Nisba: "خصم",
      nisba: "0",
      nisbaDaf3a: "0",
      qimaDaf3aBa3d: "55940634455.000",
    },
    {
      id: 2, mosalsal: "5/2",
      kodSharika: "5618",
      sharika: "مكتب الشرق للمقاولات",
      naw3: "عرض اساسي",
      taminIbtidaai: "يوريه",
      qimaOrd: "55940634455.000",
      adad: "13",
      naw3Nisba: "خصم",
      nisba: "0",
      nisbaDaf3a: "0",
      qimaDaf3aBa3d: "55940634455.000",
    },
  ];

  return (
    <div className="space-y-4" dir="rtl">
      {/* print buttons */}
      <div className="flex flex-col gap-2 w-48">
        <Button size="sm" variant="primary">طباعة نموذج 1/ب</Button>
        <Button size="sm" variant="primary">طباعة نموذج 1/ب</Button>
        <Button size="sm" variant="primary">المراجعة الحسابية</Button>
        <Button size="sm" variant="primary">1/ب الى 192</Button>
        <Button size="sm" variant="primary">طباعة نموذج 1/ب</Button>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-2 font-semibold border-l border-gray-200">المسلسل</th>
              <th className="p-2 font-semibold border-l border-gray-200">كود الشركة</th>
              <th className="p-2 font-semibold border-l border-gray-200">اسم الشركة</th>
              <th className="p-2 font-semibold border-l border-gray-200">نوع العرض</th>
              <th className="p-2 font-semibold border-l border-gray-200">التأمين الابتدائي</th>
              <th className="p-2 font-semibold border-l border-gray-200">قيمة العرض المالي</th>
              <th className="p-2 font-semibold border-l border-gray-200">عدد الاوراق المالية</th>
              <th className="p-2 font-semibold border-l border-gray-200">نوع النسبة</th>
              <th className="p-2 font-semibold border-l border-gray-200">النسبة %</th>
              <th className="p-2 font-semibold border-l border-gray-200">نسبة الدفعة المقدمة %</th>
              <th className="p-2 font-semibold">العرض بعد النسبة</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-2 border-l border-gray-100">{row.mosalsal}</td>
                <td className="p-2 border-l border-gray-100">{row.kodSharika}</td>
                <td className="p-2 border-l border-gray-100">{row.sharika}</td>
                <td className="p-2 border-l border-gray-100">{row.naw3}</td>
                <td className="p-2 border-l border-gray-100">{row.taminIbtidaai}</td>
                <td className="p-2 border-l border-gray-100">{row.qimaOrd}</td>
                <td className="p-2 border-l border-gray-100">{row.adad}</td>
                <td className="p-2 border-l border-gray-100">
                  <select defaultValue={row.naw3Nisba} className="border border-gray-300 rounded px-1 py-0.5 text-xs bg-background">
                    <option>خصم</option>
                    <option>زيادة</option>
                  </select>
                </td>
                <td className="p-2 border-l border-gray-100">{row.nisba}</td>
                <td className="p-2 border-l border-gray-100">{row.nisbaDaf3a}</td>
                <td className="p-2">{row.qimaDaf3aBa3d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">الرتبة</th>
              <th className="p-3 font-semibold border-l border-gray-200">الاسم</th>
              <th className="p-3 font-semibold border-l border-gray-200">الوظيفة</th>
              <th className="p-3 font-semibold border-l border-gray-200">تعمل</th>
              <th className="p-3 font-semibold">طباعة نموذج</th>
            </tr>
          </thead>
          <tbody>
            {committeeData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.raqmRatba}</td>
                <td className="p-3 border-l border-gray-100">{row.raqm}</td>
                <td className="p-3 border-l border-gray-100">{row.wazifa}</td>
                <td className="p-3 border-l border-gray-100">
                  <input type="checkbox" checked={row.ta3mal} readOnly className="w-4 h-4 accent-primary-500" />
                </td>
                <td className="p-3">{row.tiba3a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Tab 4: اجراءات البت الفني (Screenshot 163433)
// ────────────────────────────────────────────────
function EjraaatAlBathAlFani() {
  const committeeData = [
    { id: 1, raqmRatba: "مقدم أج", raqm: "احمد محمود السيد", wazifa: "رئيس اللجنة", tawqi3: true, tiba3a: "طباعة نموذج 9" },
    { id: 2, raqmRatba: "نقيب", raqm: "على احمد على", wazifa: "عضو اللجنة", tawqi3: false, tiba3a: "طباعة نموذج 10" },
    { id: 3, raqmRatba: "مقدم", raqm: "ممدوح شاكر فتحي", wazifa: "مندوب العقود", tawqi3: true, tiba3a: "طباعة نموذج 15" },
    { id: 4, raqmRatba: "ملازم", raqm: "عبدالله محمد احمد", wazifa: "عضو هيئة القضاء", tawqi3: false, tiba3a: "خطاب اللجنة" },
  ];

  const companiesResult = [
    { id: 1, kod: "6618", sharika: "مكتب الشرق للمقاولات", naw3: "عرض اساسي", tarikh: "2025/5/3", qarar: "مقبول", raqmMwafaqa: "", asbab: "" },
    { id: 2, kod: "6619", sharika: "مكتب الشرق للمقاولات", naw3: "عرض اساسي", tarikh: "2025/5/3", qarar: "مقبول", raqmMwafaqa: "", asbab: "" },
    { id: 3, kod: "9555", sharika: "مكتب الشرق للمقاولات", naw3: "عرض اساسي", tarikh: "2025/5/3", qarar: "مقبول", raqmMwafaqa: "", asbab: "" },
    { id: 4, kod: "2145", sharika: "مكتب الشرق للمقاولات", naw3: "عرض اساسي", tarikh: "2025/5/3", qarar: "مقبول", raqmMwafaqa: "", asbab: "" },
  ];

  const asnafData = [
    { id: 1, wasf: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", band: "1", qarar: "مقبول", asbab: "لا يأس" },
    { id: 2, wasf: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", band: "5", qarar: "مقبول", asbab: "Morceau" },
  ];

  return (
    <div className="space-y-4" dir="rtl">
      {/* Print buttons */}
      <div className="flex flex-col gap-2 w-40">
        <Button size="sm" variant="primary">طباعة نموذج 9</Button>
        <Button size="sm" variant="primary">طباعة نموذج 10</Button>
        <Button size="sm" variant="primary">طباعة نموذج 15</Button>
        <Button size="sm" variant="primary">طباعة نموذج 15ب</Button>
        <Button size="sm" variant="primary">طباعة نموذج 1/ب</Button>
        <Button size="sm" variant="primary">خطاب اللجنة</Button>
        <Button size="sm" variant="primary">خطاب اللجنة</Button>
      </div>

      {/* Committee */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">الرتبة</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم العضو</th>
              <th className="p-3 font-semibold border-l border-gray-200">الوظيفة</th>
              <th className="p-3 font-semibold border-l border-gray-200">توقيع</th>
              <th className="p-3 font-semibold">طباعة نموذج</th>
            </tr>
          </thead>
          <tbody>
            {committeeData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.raqmRatba}</td>
                <td className="p-3 border-l border-gray-100">{row.raqm}</td>
                <td className="p-3 border-l border-gray-100">{row.wazifa}</td>
                <td className="p-3 border-l border-gray-100">
                  <input type="checkbox" checked={row.tawqi3} readOnly className="w-4 h-4 accent-primary-500" />
                </td>
                <td className="p-3">{row.tiba3a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Companies decision */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-2 font-semibold border-l border-gray-200">كود الشركة</th>
              <th className="p-2 font-semibold border-l border-gray-200">اسم الشركة</th>
              <th className="p-2 font-semibold border-l border-gray-200">نوع العرض</th>
              <th className="p-2 font-semibold border-l border-gray-200">تاريخ اللجنة</th>
              <th className="p-2 font-semibold border-l border-gray-200">قرار اللجنة</th>
              <th className="p-2 font-semibold">القرار</th>
            </tr>
          </thead>
          <tbody>
            {companiesResult.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-2 border-l border-gray-100">{row.kod}</td>
                <td className="p-2 border-l border-gray-100">{row.sharika}</td>
                <td className="p-2 border-l border-gray-100">{row.naw3}</td>
                <td className="p-2 border-l border-gray-100">{row.tarikh}</td>
                <td className="p-2 border-l border-gray-100">
                  <select defaultValue={row.qarar} className="border border-gray-300 rounded px-1 py-0.5 text-xs bg-background">
                    <option>مقبول</option>
                    <option>مرفوض</option>
                  </select>
                </td>
                <td className="p-2">
                  <select className="border border-gray-300 rounded px-1 py-0.5 text-xs bg-background">
                    <option>مقبول</option>
                    <option>مرفوض</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* اسم صنف الشركة في العرض */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">الصنف</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم صنف الشركة في العرض</th>
              <th className="p-3 font-semibold border-l border-gray-200">قرار اللجنة</th>
              <th className="p-3 font-semibold">اسباب القرار</th>
            </tr>
          </thead>
          <tbody>
            {asnafData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.band}</td>
                <td className="p-3 border-l border-gray-100 max-w-xs text-xs">{row.wasf}</td>
                <td className="p-3 border-l border-gray-100">
                  <select defaultValue={row.qarar} className="border border-gray-300 rounded px-1 py-0.5 text-xs bg-background">
                    <option>مقبول</option>
                    <option>مرفوض</option>
                  </select>
                </td>
                <td className="p-3">
                  <select defaultValue={row.asbab} className="border border-gray-300 rounded px-1 py-0.5 text-xs bg-background">
                    <option>لا يأس</option>
                    <option>Morceau</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Tab 5: اجراءات البت المالي (Screenshot 163608)
// ────────────────────────────────────────────────
function EjraaatAlBathAlMali() {
  const committeeData = [
    { id: 1, raqmRatba: "مقدم", raqm: "احمد محمد على", wazifa: "رئيس اللجنة", tawqi3: true, tasjil: "تسجيل العرض المالي", tiba3a: "طباعة نموذج13" },
    { id: 2, raqmRatba: "ملازم", raqm: "ياسر على محمود", wazifa: "عضو هيئة القضاء", tawqi3: false, tasjil: "تسجيل العرض المالي", tiba3a: "طباعة نموذج13" },
    { id: 3, raqmRatba: "ملازم", raqm: "تامر السيد احمد", wazifa: "عضو اللجنة المالية", tawqi3: true, tasjil: "تسجيل العرض المالي", tiba3a: "طباعة نموذج13" },
    { id: 4, raqmRatba: "ملازم", raqm: "محمود احمد على", wazifa: "مراجع", tawqi3: false, tasjil: "تسجيل العرض المالي", tiba3a: "طباعة نموذج13" },
  ];

  const data = [
    {
      id: 1,
      mosalsal: "5/1",
      kodSharika: "8818",
      sharika: "مكتب الشرق للمقاولات",
      naw3: "عرض اساسي",
      qimaMali: "58944455",
      qimaHisabiya: "58944455",
      nisba: "0",
      khasm: "0",
      qimaFaeda: "58944455",
      qimaNihaia: "58944455",
      nisbaBa3d: "58944455",
      mustafid: "0",
    },
    {
      id: 2,
      mosalsal: "3/1",
      kodSharika: "5618",
      sharika: "مكتب الشرق للمقاولات",
      naw3: "عرض اساسي",
      qimaMali: "58944455",
      qimaHisabiya: "58944455",
      nisba: "0",
      khasm: "0",
      qimaFaeda: "58944455",
      qimaNihaia: "58944455",
      nisbaBa3d: "58944455",
      mustafid: "0",
    },
  ];

  const asnafData = [
    { id: 1, band: "1", wasf: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", kamiya: "23.000", wahda: "3", sarTaqdeeri: "48785.000", sarSharika: "515.000", khasm: "0", ba3dKhasm: "515.000", ijmali: "154875.000", qarar: "Y" },
    { id: 2, band: "5", wasf: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", kamiya: "23.000", wahda: "3", sarTaqdeeri: "48785.000", sarSharika: "575.000", khasm: "0", ba3dKhasm: "575.000", ijmali: "154875.000", qarar: "Y" },
  ];

  return (
    <div className="space-y-4" dir="rtl">
      {/* Print buttons */}
      <div className="flex flex-col gap-2 w-56">
        <Button size="sm" variant="primary">طباعة كشف القيمة المالي</Button>
        <Button size="sm" variant="primary">طباعة نموذج 19</Button>
        <Button size="sm" variant="primary">طباعة نموذج 10-ب</Button>
        <Button size="sm" variant="primary">توزيع رقم 11</Button>
        <Button size="sm" variant="primary">المضاربة رقم 19-ب</Button>
        <Button size="sm" variant="primary">1/ب الى 192</Button>
        <Button size="sm" variant="primary">تسجيل العرض المالي</Button>
        <Button size="sm" variant="primary">1/ب الى 1/ب</Button>
        <Button size="sm" variant="primary">طباعة نموذج 15ب/1/ب</Button>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-2 font-semibold border-l border-gray-200">مسلسل</th>
              <th className="p-2 font-semibold border-l border-gray-200">كود الشركة</th>
              <th className="p-2 font-semibold border-l border-gray-200">اسم الشركة</th>
              <th className="p-2 font-semibold border-l border-gray-200">نوع العرض</th>
              <th className="p-2 font-semibold border-l border-gray-200">القيمة المالية</th>
              <th className="p-2 font-semibold border-l border-gray-200">المراجعة الحسابية</th>
              <th className="p-2 font-semibold border-l border-gray-200">الخصم%</th>
              <th className="p-2 font-semibold border-l border-gray-200">ارقام البنود</th>
              <th className="p-2 font-semibold border-l border-gray-200">القيمة بعد الخصم</th>
              <th className="p-2 font-semibold border-l border-gray-200">مستفيد</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-2 border-l border-gray-100">{row.mosalsal}</td>
                <td className="p-2 border-l border-gray-100">{row.kodSharika}</td>
                <td className="p-2 border-l border-gray-100">{row.sharika}</td>
                <td className="p-2 border-l border-gray-100">{row.naw3}</td>
                <td className="p-2 border-l border-gray-100">{row.qimaMali}</td>
                <td className="p-2 border-l border-gray-100">{row.qimaHisabiya}</td>
                <td className="p-2 border-l border-gray-100">{row.khasm}</td>
                <td className="p-2 border-l border-gray-100">{row.nisba}</td>
                <td className="p-2 border-l border-gray-100">{row.qimaFaeda}</td>
                <td className="p-2">{row.mustafid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">الرتبة</th>
              <th className="p-3 font-semibold border-l border-gray-200">الاسم</th>
              <th className="p-3 font-semibold border-l border-gray-200">الوظيفة</th>
              <th className="p-3 font-semibold border-l border-gray-200">توقيع</th>
              <th className="p-3 font-semibold border-l border-gray-200">تسجيل العرض المالي</th>
              <th className="p-3 font-semibold">طباعة نموذج13</th>
            </tr>
          </thead>
          <tbody>
            {committeeData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.raqmRatba}</td>
                <td className="p-3 border-l border-gray-100">{row.raqm}</td>
                <td className="p-3 border-l border-gray-100">{row.wazifa}</td>
                <td className="p-3 border-l border-gray-100">
                  <input type="checkbox" checked={row.tawqi3} readOnly className="w-4 h-4 accent-primary-500" />
                </td>
                <td className="p-3 border-l border-gray-100">{row.tasjil}</td>
                <td className="p-3">{row.tiba3a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Asnaf table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-2 font-semibold border-l border-gray-200">كود الصنف</th>
              <th className="p-2 font-semibold border-l border-gray-200">البند</th>
              <th className="p-2 font-semibold border-l border-gray-200">اسم الصنف</th>
              <th className="p-2 font-semibold border-l border-gray-200">الكمية</th>
              <th className="p-2 font-semibold border-l border-gray-200">وحد الصنف</th>
              <th className="p-2 font-semibold border-l border-gray-200">السعر التقديري</th>
              <th className="p-2 font-semibold border-l border-gray-200">سعر الشركة</th>
              <th className="p-2 font-semibold border-l border-gray-200">الخصم</th>
              <th className="p-2 font-semibold border-l border-gray-200">بعد الخصم</th>
              <th className="p-2 font-semibold border-l border-gray-200">الأجمالي</th>
              <th className="p-2 font-semibold">قرار اللجنة</th>
            </tr>
          </thead>
          <tbody>
            {asnafData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-2 border-l border-gray-100">{row.id}</td>
                <td className="p-2 border-l border-gray-100">{row.band}</td>
                <td className="p-2 border-l border-gray-100 max-w-xs text-xs">{row.wasf}</td>
                <td className="p-2 border-l border-gray-100">{row.kamiya}</td>
                <td className="p-2 border-l border-gray-100">{row.wahda}</td>
                <td className="p-2 border-l border-gray-100">{row.sarTaqdeeri}</td>
                <td className="p-2 border-l border-gray-100">{row.sarSharika}</td>
                <td className="p-2 border-l border-gray-100">{row.khasm}</td>
                <td className="p-2 border-l border-gray-100">{row.ba3dKhasm}</td>
                <td className="p-2 border-l border-gray-100">{row.ijmali}</td>
                <td className="p-2">{row.qarar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Tab 6: أمر التوريد (Screenshot 163627)
// ────────────────────────────────────────────────
function AmrAlTawrid() {
  const asnafData = [
    { id: 1, kod: "1", wasf: "توريد مفصلات بلاستك", wahda: "3", kamiya: "23.000", sarWahda: "515000.00", ijmali: "514888888" },
    { id: 2, kod: "2", wasf: "توريد حوض 60 سم", wahda: "3", kamiya: "23.000", sarWahda: "515000.00", ijmali: "55548746.0000" },
    { id: 3, kod: "3", wasf: "توريد خزان بماكينة تعبئة", wahda: "3", kamiya: "23.000", sarWahda: "515000.00", ijmali: "48745454.1.2" },
    { id: 4, kod: "4", wasf: "توريد مفصلات بلاستك", wahda: "3", kamiya: "23.000", sarWahda: "515000.00", ijmali: "4552485475.226" },
    { id: 5, kod: "5", wasf: "توريد حوض 60 سم", wahda: "3", kamiya: "23.000", sarWahda: "515000.00", ijmali: "88755564.0111" },
    { id: 6, kod: "6", wasf: "توريد خزان بماكينة تعبئة", wahda: "3", kamiya: "23.000", sarWahda: "515000.00", ijmali: "5425548554" },
  ];

  const mashro3Data = [
    { id: 1, kod: "1", mokhasSas: "الهيئة الصحية العسكرية - مستشفى المعادي", mablakh: "481000", wasf: "الهيئة الصحية لمستشفى المعادي والملحقات الصحية العسكرية التابعة لها بالعالمين الجديدة", active: false },
    { id: 2, kod: "4", mokhasSas: "الهيئة الصحية العسكرية - مستشفى المعادي", mablakh: "481000", wasf: "Morceau", active: true },
  ];

  return (
    <div className="space-y-4" dir="rtl">
      {/* Header fields */}
      <div className="grid grid-cols-2 gap-3 text-sm border border-gray-200 rounded p-4 bg-base">
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">رقم أمر التوريد</label>
          <input defaultValue="1370" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">تاريخ أمر التوريد</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>2026/5/3</option>
          </select>
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <label className="font-medium w-44 shrink-0 text-right">الشركة</label>
          <input defaultValue="مكتب الشرق للمقاولات - مقاولات عمومية" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <label className="font-medium w-44 shrink-0 text-right">الموضوع</label>
          <input defaultValue="توريد اصناف لزوم انشاء مشروع تطوير البنية التحتية الصحية العسكرية - التوريدات الصحية العمومية" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">قيمة أمر التوريد</label>
          <input defaultValue="458502+56" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">نسبة الخصم %</label>
          <input defaultValue="6" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">الكيمة بعد الخصم</label>
          <input defaultValue="9486018601.11" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">قيمة الضمان</label>
          <input defaultValue="5" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">نسبة الدفعة</label>
          <input defaultValue="42407046452" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">المجموعة الصنفية</label>
          <input defaultValue="0" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <label className="font-medium w-44 shrink-0 text-right">ملاحظات</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
      </div>

      {/* Print buttons */}
      <div className="flex flex-col gap-2 w-48">
        <Button size="sm" variant="primary">انشاء أمر التوريد</Button>
        <Button size="sm" variant="primary">طباعة أمر التوريد</Button>
        <Button size="sm" variant="primary">نموذج 1 الى 1</Button>
        <Button size="sm" variant="primary">نموذج 1 الى 1</Button>
        <Button size="sm" variant="primary">موازنة / صرف</Button>
        <Button size="sm" variant="primary">طباعة مذكرة الموافقة</Button>
      </div>

      {/* Asnaf table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-2 font-semibold border-l border-gray-200">كود الصنف</th>
              <th className="p-2 font-semibold border-l border-gray-200">اسم الصنف</th>
              <th className="p-2 font-semibold border-l border-gray-200">الوحدة</th>
              <th className="p-2 font-semibold border-l border-gray-200">الكمية</th>
              <th className="p-2 font-semibold border-l border-gray-200">سعر الوحدة</th>
              <th className="p-2 font-semibold border-l border-gray-200">الأجمالي</th>
              <th className="p-2 font-semibold">رقم البند</th>
            </tr>
          </thead>
          <tbody>
            {asnafData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-2 border-l border-gray-100">{row.kod}</td>
                <td className="p-2 border-l border-gray-100">{row.wasf}</td>
                <td className="p-2 border-l border-gray-100">{row.wahda}</td>
                <td className="p-2 border-l border-gray-100">{row.kamiya}</td>
                <td className="p-2 border-l border-gray-100">{row.sarWahda}</td>
                <td className="p-2 border-l border-gray-100">{row.ijmali}</td>
                <td className="p-2">{row.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mashro3 table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">الكود</th>
              <th className="p-3 font-semibold border-l border-gray-200">المخصص</th>
              <th className="p-3 font-semibold border-l border-gray-200">المبلغ</th>
              <th className="p-3 font-semibold border-l border-gray-200">وصف المشروع</th>
              <th className="p-3 font-semibold">Active</th>
            </tr>
          </thead>
          <tbody>
            {mashro3Data.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.kod}</td>
                <td className="p-3 border-l border-gray-100">{row.mokhasSas}</td>
                <td className="p-3 border-l border-gray-100">{row.mablakh}</td>
                <td className="p-3 border-l border-gray-100 max-w-xs text-xs">{row.wasf}</td>
                <td className="p-3">
                  <input type="checkbox" checked={row.active} readOnly className="w-4 h-4 accent-primary-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Tab 7: ملاحظات نموذج 19
// ────────────────────────────────────────────────
function MolahazatNamozhag19() {
  return (
    <div className="space-y-4" dir="rtl">
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">رقم أمر التوريد</label>
          <input defaultValue="1370" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">تاريخ أمر التوريد</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>2026/5/3</option>
          </select>
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <label className="font-medium w-44 shrink-0 text-right">الشركة</label>
          <input defaultValue="مكتب الشرق للمقاولات" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
      </div>
      <div className="flex items-start gap-2 text-sm">
        <label className="font-medium mt-2 shrink-0">ملاحظات نموذج 19</label>
        <textarea className="flex-1 border border-gray-300 rounded px-2 py-1 bg-background h-32" />
      </div>
      <Button size="sm" variant="primary">حفظ الملاحظات</Button>
    </div>
  );
}

// ────────────────────────────────────────────────
// Main Component
// ────────────────────────────────────────────────
export default function MahdarEjra2at() {
  const [activeTab, setActiveTab] = useState("عروض الشركات");
  const [searchVal, setSearchVal] = useState("");
  const [kodMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");
  const [naw3Lajna, setNaw3Lajna] = useState("لجنة فتح المطاريف الفنية");
  const [tarikhFrom, setTarikhFrom] = useState("2025/8/5");
  const [byanLajna, setByanLajna] = useState("");
  const [sabt, setSabt] = useState("");

  const tabs = [
    "عروض الشركات",
    "اجراءات الفتح الفني",
    "اجراءات الفتح المالي",
    "اجراءات البت الفني",
    "اجراءات البت المالي",
    "أمر التوريد",
    "ملاحظات نموذج 19",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "عروض الشركات": return <OrdoodAlsharaket />;
      case "اجراءات الفتح الفني": return <EjraaatAlFathAlFani />;
      case "اجراءات الفتح المالي": return <EjraaatAlFathAlMali />;
      case "اجراءات البت الفني": return <EjraaatAlBathAlFani />;
      case "اجراءات البت المالي": return <EjraaatAlBathAlMali />;
      case "أمر التوريد": return <AmrAlTawrid />;
      case "ملاحظات نموذج 19": return <MolahazatNamozhag19 />;
      default: return null;
    }
  };

  return (
    <div className="p-4 space-y-4" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex flex-col gap-2">
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">TRDD_UF</span>
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">20252028</span>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">محضر اجراءات الفتح والبت الفني</h1>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">قسم المشتريات</button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">اجراثات التعاقد / التوريدات</button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 flex-wrap border border-gray-200 rounded p-3 bg-base">
        <div className="flex items-center gap-2 mr-auto">
          <label className="text-sm font-medium">العام المالي</label>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-background">
            <option>{amMali}</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">كود المشروع</label>
          <input value={kodMashro3} readOnly className="border border-gray-300 rounded px-2 py-1 text-sm bg-background w-32" />
        </div>
      </div>

      {/* Projects Table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">كود المشروع</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم المشروع</th>
              <th className="p-3 font-semibold border-l border-gray-200">تكلفة المشروع</th>
              <th className="p-3 font-semibold border-l border-gray-200">كود الفرع</th>
              <th className="p-3 font-semibold">اسم الفرع المنفذ</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.raqmMashro3}</td>
                <td className="p-3 border-l border-gray-100 max-w-xs">{row.ismMashro3}</td>
                <td className="p-3 border-l border-gray-100">{row.taklfaMashro3}</td>
                <td className="p-3 border-l border-gray-100">{row.kodFar3}</td>
                <td className="p-3">{row.ismFar3Monafez}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 border border-gray-200 rounded p-2 bg-base">
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} placeholder="البحث" className="flex-1 bg-transparent outline-none text-sm" />
      </div>

      {/* Committee type and date */}
      <div className="flex items-center gap-4 flex-wrap border border-gray-200 rounded p-3 bg-base text-sm" dir="rtl">
        <div className="flex items-center gap-2">
          <label className="font-medium">نوع اللجنة</label>
          <select value={naw3Lajna} onChange={(e) => setNaw3Lajna(e.target.value)} className="border border-gray-300 rounded px-2 py-1 bg-background">
            <option>لجنة فتح المطاريف الفنية</option>
            <option>لجنة فتح المطاريف المالية</option>
            <option>لجنة البت الفني</option>
            <option>لجنة البت المالي</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">اليوم</label>
          <select value={tarikhFrom} onChange={(e) => setTarikhFrom(e.target.value)} className="border border-gray-300 rounded px-2 py-1 bg-background">
            <option>2025/8/5</option>
            <option>2025/8/10</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">السبت</label>
          <input value={sabt} onChange={(e) => setSabt(e.target.value)} className="border border-gray-300 rounded px-2 py-1 bg-background w-32" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">بيان اللجنة</label>
          <input value={byanLajna} onChange={(e) => setByanLajna(e.target.value)} className="border border-gray-300 rounded px-2 py-1 bg-background w-40" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">لجنة فتح المطاريف الفنية</label>
          <input className="border border-gray-300 rounded px-2 py-1 bg-background w-40" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 pb-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab
                ? "text-primary-600 border-b-2 border-primary-600 -mb-1 font-bold"
                : "text-gray-500 hover:text-primary-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-base rounded border border-gray-100 p-4">
        {renderTabContent()}
      </div>
    </div>
  );
}
