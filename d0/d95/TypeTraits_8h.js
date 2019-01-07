var TypeTraits_8h =
[
    [ "is_specialization", "d8/d85/structo2_1_1framework_1_1is__specialization.html", null ],
    [ "is_specialization< Ref< Args...>, Ref >", "da/d1e/structo2_1_1framework_1_1is__specialization_3_01Ref_3_01Args_8_8_8_4_00_01Ref_01_4.html", null ],
    [ "MarkAsNonMessageable", "d9/d1c/structo2_1_1framework_1_1MarkAsNonMessageable.html", null ],
    [ "is_forced_non_messageable", "da/dee/structo2_1_1framework_1_1is__forced__non__messageable.html", null ],
    [ "is_forced_non_messageable< T, typename std::enable_if< std::is_same< typename T::non_messageable, MarkAsNonMessageable >::value >::type >", "df/ddf/structo2_1_1framework_1_1is__forced__non__messageable_3_01T_00_01typename_01std_1_1enable__if_3_9497e1cc58c5001cfb1a9a57a11a8068.html", null ],
    [ "is_messageable", "de/de6/structo2_1_1framework_1_1is__messageable.html", null ],
    [ "is_messageable< gsl::span< T > >", "dd/dca/structo2_1_1framework_1_1is__messageable_3_01gsl_1_1span_3_01T_01_4_01_4.html", null ],
    [ "is_container", "dc/d9b/structo2_1_1framework_1_1is__container.html", null ],
    [ "class_member_checker", "d1/d52/structo2_1_1framework_1_1class__member__checker.html", null ],
    [ "is_container< T, std::conditional_t< false, class_member_checker< typename T::value_type, typename T::size_type, typename T::allocator_type, typename T::iterator, typename T::const_iterator, decltype(std::declval< T >().size()), decltype(std::declval< T >().begin()), decltype(std::declval< T >().end()), decltype(std::declval< T >().cbegin()), decltype(std::declval< T >().cend())>, void > >", "de/d5c/structo2_1_1framework_1_1is__container_3_01T_00_01std_1_1conditional__t_3_01false_00_01class__mef60b0640f3a7413451971b3764fe2133.html", null ],
    [ "has_root_dictionary", "d3/de1/structo2_1_1framework_1_1has__root__dictionary.html", null ],
    [ "has_root_dictionary< T, std::conditional_t< false, class_member_checker< decltype(std::declval< T >().Class())>, void > >", "d0/d7f/structo2_1_1framework_1_1has__root__dictionary_3_01T_00_01std_1_1conditional__t_3_01false_00_01c3a7047afd30b3fd4df3d429b8c4e1a22.html", null ],
    [ "has_root_dictionary< T, typename std::enable_if< is_container< T >::value >::type >", "d5/d6d/classo2_1_1framework_1_1has__root__dictionary_3_01T_00_01typename_01std_1_1enable__if_3_01is__co3a14f09bcf42c805e484bfdd1c1dadfb.html", null ],
    [ "is_boost_serializable_base", "d5/dbf/structo2_1_1framework_1_1is__boost__serializable__base.html", null ],
    [ "is_boost_serializable_base< Type, Archive, void_t< decltype(std::declval< Type & >().serialize(std::declval< Archive & >(), 0))> >", "db/d4b/structo2_1_1framework_1_1is__boost__serializable__base_3_01Type_00_01Archive_00_01void__t_3_01de349f2b218d86101c21c9634bb96a83a3.html", null ],
    [ "is_boost_serializable", "d2/d70/structo2_1_1framework_1_1is__boost__serializable.html", null ],
    [ "is_boost_serializable< Type, Archive, void_t< typename Type::value_type > >", "d4/dbd/structo2_1_1framework_1_1is__boost__serializable_3_01Type_00_01Archive_00_01void__t_3_01typename98499f1bdfed8f3296d77dbecb6de076.html", null ],
    [ "is_boost_serializable< Type, boost::archive::binary_oarchive, void_t< typename Type::value_type > >", "de/d5d/structo2_1_1framework_1_1is__boost__serializable_3_01Type_00_01boost_1_1archive_1_1binary__oarch4233b1dc6d06011d10bf67f57517f607.html", null ],
    [ "void_t", "d0/d95/TypeTraits_8h.html#a4f7f2f3543b3e5e3a3a80f05518f0d97", null ]
];