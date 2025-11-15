export default function BankDropdown() {
  const bankingMenu = [
    {
      section: "AWARENESS",
      items: [
        { title: "Blog" },
        { title: "Learn" },
        { title: "Events" },
        { title: "White Papers" },
        { title: "Customer Stories" },
      ],
    },
    {
      section: "DEVELOPERS",
      items: [
        { title: "Developer Docs" },
        { title: "Integrations" },
        { title: "API Reference" },
        { title: "API Playground" },
        { title: "Onboarding APIs" },
      ],
    },
    {
      section: "SOLUTIONS",
      items: [
        { title: "SaaS" },
        { title: "E-Commerce" },
        { title: "Education" },
        { title: "BFSI" },
        { title: "Freelance" },
      ],
    },
    {
      section: "FREE TOOLS",
      items: [
        { title: "GST Calculator" },
        { title: "Online TDS Payment" },
        { title: "GST Number Search" },
        { title: "GST Search by PAN" },
        { title: "ROI Calculator", badge: "NEW" },
        { title: "CAGR Calculator", badge: "NEW" },
        { title: "EBITDA Calculator", badge: "NEW" },
      ],
    },
  ];

  // Flatten data → header + items
  const flatList = bankingMenu.flatMap(section => [
    { type: "header", title: section.section },
    ...section.items.map(item => ({ type: "item", ...item }))
  ]);

  return (
    <div className="absolute left-0 top-10 w-[900px] bg-white shadow-xl rounded-xl p-8 z-30 animate-fade">

      <div className="flex flex-col flex-wrap h-[350px]">

        {flatList.map((item, index) => (
          item.type === "header" ? (
            <h3
              key={index}
              className="text-gray-500 text-xs font-semibold mb-3 mt-4"
            >
              {item.title}
            </h3>
          ) : (
            <div
              key={index}
              className="flex items-start gap-3 mb-4 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition"
            >
              <div className="flex flex-col">
                <h2 className="text-sm font-semibold">{item.title}</h2>

                {item.badge && (
                  <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-md w-fit mt-1">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          )
        ))}

      </div>

    </div>
  );
}
